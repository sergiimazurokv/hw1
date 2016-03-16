'use strict';

const minAge = 0;
const maxAge = 123;

module.exports = (age) => {

  if (age < minAge) {
    return `Age can't be less than ${minAge}`;
  } else if (age > maxAge) {
    return `Age can't be greater than ${maxAge}`;
  } else if (~~age !== age) {
    return `Age can't be double`;
  }

  return null;

};