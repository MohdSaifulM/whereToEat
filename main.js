const prompt = require('prompt');
prompt.message = '';
let schema = {
	properties: {
		food_place : {
			type: 'array',
			minItems: 3,
			maxItems: 5
		}
	}
}

prompt.start();

console.log('Please input the places you feel like you wanna eat:');

const lunchPicker = () => {
	prompt.get(schema, (err, res) => {
		if (err) return console.log(err);
		let foodArr = res.food_place;
		console.log(`Are you happy with the selection? ${foodArr}`);
		confirmChoice(foodArr);
	})
};


const confirmChoice = (foodArr) => {
	prompt.get(['answer'], (err, res) => {
		if (err) return console.log(err);
		if (res.answer.toLowerCase() === 'yes' || res.answer.toLowerCase() === 'y') {
			console.log('The food place has been decied for you and it is....');
			for (let x=0; x < 30; x++) {
				console.log('............................................................................................................................................................................')
			}
			let lunch = foodArr[Math.floor(Math.random() * foodArr.length)];
			console.log(lunch);
			console.log('Are you happy with your choice?');
			lunchConfirmed(foodArr, lunch);
		} else {
			lunchPicker();
		}
	})
}

const lunchConfirmed = (foodArr, lunch) => {
	prompt.get(['yes'], (err, res) => {
		if (err) return console.log(err);
		if (res.yes.toLowerCase() === 'yes' || res.yes.toLowerCase() === 'y') {
			console.log(`Enjoy your lunch at ${lunch}!!`)
		} else {
			console.log('The food place has been decied for you and it is....');
			for (let x=0; x < 30; x++) {
				console.log('............................................................................................................................................................................')
			}
			let newLunch = foodArr[Math.floor(Math.random() * foodArr.length)];
			console.log(newLunch);
			console.log('Are you happy with your choice?');
			lunchConfirmed(foodArr, newLunch);
		}
	})
}

lunchPicker();
