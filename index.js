let userWeapon = undefined;
let computerWeapon = undefined;
const result = document.querySelector('#winner');
const resultat = document.querySelector('#resultat');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');
let test = 'Joel';

document.querySelector('#rock').addEventListener('click', () => {
	userWeapon = 'sten';
	//console.log(`Du har valt ${userWeapon}`);
	getWinner();
});

document.querySelector('#scissor').addEventListener('click', () => {
	userWeapon = 'sax';
	//console.log(`Du har valt: ${userWeapon}`);
	getWinner();
});

document.querySelector('#paper').addEventListener('click', () => {
	userWeapon = 'påse';
	//console.log(`Du har valt: ${userWeapon}`)
	getWinner();
});


// Hämta användarens val

// Visa vinnaren och slumpa fram datorns val
 function getWinner () {
	 computerWeapon = Math.round(Math.random() *2);
	 console.log(computerWeapon);
	 //conditional statement som kollar om computerWeapon o UserWeapon är lika.
	 if(computerWeapon === 0) {
		 computerWeapon = 'sten';
	 } else if (computerWeapon === 1) {
		 computerWeapon = 'sax';
	 } else if (computerWeapon === 2) {
		 computerWeapon = 'påse';
	 }
	 // avgör vinnare eller om det är oavgjort.
	 resultat.innerHTML = `Du valde ${userWeapon} och datorn valde ${computerWeapon}.`;

	 if(userWeapon === computerWeapon) {	
		result.innerHTML = 'Oavgjort!'
		} else if (userWeapon === 'sten') {
			result.innerHTML = computerWeapon === 'sax' ? 'Yesss! Du vann! 😍' : 'Sorry, datorn vann! 😥';
		} else if (userWeapon === 'sax') {
			result.innerHTML = computerWeapon === 'påse' ? 'Du tog hem det!👊🏽' : 'Najj, dattan vann 😩';
		} else if (userWeapon === 'påse') {
			result.innerHTML = computerWeapon === 'stem' ? 'Grattis! Du vann!😻' : 'Ajdå, datorn spöade dig!🙈'	
		}
	};
