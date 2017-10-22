const people = [{
    name: 'Marcos'
  },
  {
    name: 'John'
  }
];

const person = people.find(p => p.name.includes('a'));

const personIndex = people.findIndex(p => p.name.includes('a'));

console.log(`Person:${JSON.stringify(person)} - Index:${personIndex}`);
