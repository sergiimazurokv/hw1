'use strict';

const validator = require('email-validator');

module.exports = (email) => {

  if (!email) {
    return null;
  }

  if (!validator.validate(email)) {
    return `E-mail ${email} is't valid`;
  }

  return null;
};