'use strict';

const list = new Map();

class User {

  constructor (nick, name, email, description, age) {
    this.nick = nick;
    this.name = name;
    this['e-mail'] = email;
    this.description = description;
    this.age = age;
    this[Symbol.for('errors')] = [];
  }

  rules() {
    return {
      nick: require('./validators/nickValidator'),
      name: require('./validators/nameValidator'),
      ['e-mail']: require('./validators/emailValidator'),
      description: require('./validators/descriptionValidator'),
      age: require('./validators/ageValidator')
    };
  }

  findAll() {
    const arr = [];

    list.forEach((user) => {
      arr.push(user);
    });

    return arr;
  }

  load(body) {
    this.nick = body.nick;
    this.name = body.name;
    this['e-mail'] = body['e-mail'];
    this.description = body.description;
    this.age = body.age;
  }

  validate() {
    let rules = this.rules();

    for (let prop in rules) {
      if (rules.hasOwnProperty(prop)) {
        let error = rules[prop](this[prop]);

        if (error) {
          this[Symbol.for('errors')].push({
            field: prop,
            error: error
          })
        }

      }
    }

    return !this[Symbol.for('errors')].length;

  }

  save() {
    if (this.validate()) {
      list.set(this.nick, this);
      return true;
    } else {
      return false;
    }
  }

  getErrors() {
    return this[Symbol.for('errors')];
  }

}

module.exports = User;