'use strict';

const url = require('url');

let count = 0;

module.exports = (req, res) => {

  let urlParsed = url.parse(req.url);

  if ('/index.html' === urlParsed.pathname) {
    ++count;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('Привіт світ!');
  } else if ('/count.html' === urlParsed.pathname) {
    res.end(count + '');
  } else {
    res.statusCode = 404;
    res.end('Page not found!');
  }

};
