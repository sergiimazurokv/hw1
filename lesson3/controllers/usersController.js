'use strict';

const jsonBody = require('body/json');
const UserModel = require('../lib/users');

module.exports = {

  getUsers: function (request, response, next) {

    let model = new UserModel();

    response.write(JSON.stringify(model.findAll(), null, 2));

    next(null);

  },

  postUsers: function(request, response, next) {

    jsonBody(request, response, (err, body) => {

      if (err) {
        next(err);
        return;
      }

      let model = new UserModel();

      model.load(body);

      if (model.save()) {
        response.statusCode = 201;
        next(null);
      } else {
        response.statusCode = 400;
        response.write(JSON.stringify({
          errors: model.getErrors()
        }, null, 2));
        next(null);
      }

    });

  }

};