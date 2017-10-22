const secretNumber = 10;

const person = Object.freeze({
  name: 'John',
  age: secretNumber
});

person.age = 20;

console.log(person);
