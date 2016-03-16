'use strict';

const pattern = /[a-z0-9]+$/;

module.exports = (nick) => {

  if (!nick) {
    return 'Nick should not be blank';
  } else if (!pattern.test(nick)) {
    return `Nick ${nick} is't valid`;
  } else {
    return null;
  }

};