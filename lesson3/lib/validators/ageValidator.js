'use strict';

const minAge = 0;
const maxAge = 123;

module.exports = (age) => {

  if (age < minAge) {
    return `This value can't be less than ${minAge}`;
  } else if (age > maxAge) {
    return `This value can't be greater than ${maxAge}`;
  }

  return null;

};