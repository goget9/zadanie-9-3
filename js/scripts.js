// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
	dinosaur = 'triceratops',
	upperCasedDinosaur = dinosaur.toUpperCase();

	console.log(upperCasedDinosaur);

var newText = text.replace('Velociraptor', upperCasedDinosaur);

	console.log(newText);

	console.log(newText.slice(0, newText.length/2));