const ireland = ['Dublin', 'Galway', 'Cork'];

const love = ireland.map(function(name){
	return `I love ${name}`
});

const loveArrow = ireland.map (name => `I love ${name}`);

console.log(loveArrow);
