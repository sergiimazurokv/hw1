'use strict';

const minAge = 0;
const maxAge = 123;

module.exports = (age) => {

  if (typeof age == 'string') {
    return 'Age can\'t be string';
  } else if (!age) {
    return null;
  } else if (age < minAge) {
    return `Age can't be less than ${minAge}`;
  } else if (age > maxAge) {
    return `Age can't be greater than ${maxAge}`;
  } else if (Math.round(age) !== age) {
    return `Age can't be double`;
  }

  return null;

};