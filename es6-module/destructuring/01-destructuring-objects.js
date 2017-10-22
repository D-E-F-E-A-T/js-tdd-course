const person = {
	name:'John',
	surname:'Max',
	age:53,
	website:'https://johnmax.com'
};

const { name,age } = person;

console.log(name,age);

const { 'name':personName } = person;

console.log(personName);
