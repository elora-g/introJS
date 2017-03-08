'use strict';   // Mode strict du JavaScript

/***********************************************************************************/
/*********************************** DONNEES JEU ***********************************/
/***********************************************************************************/
var game; 

const levelEasy = 1;
const levelNormal = 2;
const levelHard = 3;

const swordWood = 1;
const swordSteel = 2;
const swordExcalibur = 3;

const armorCopper = 1;
const armorIron = 2;
const armorMagical = 3;

/***********************************************************************************/
/********************************** FONCTIONS JEU **********************************/
/***********************************************************************************/
function initializeGame(){
	game = {};
	game.round = 1;
	game.level = requestInteger('Choisir un niveau de difficulté : 1=facile, 2=normal, 3=difficile', 1, 3);

	switch(game.level){
		case levelEasy:
			game.hpDragon = getRandomInteger(150,200);
			game.hpPlayer = getRandomInteger(200,250);
			break;
		case levelNormal:
			game.hpDragon = getRandomInteger(200,250);
			game.hpPlayer = getRandomInteger(250,300);
			break;
		case levelHard:
			game.hpDragon = getRandomInteger(250,300);
			game.hpPlayer = getRandomInteger(300,350);
			break;
	}

	game.sword = requestInteger('Choisir une arme : 1=bois, 2=acier, 3=excalibur', 1, 3);

	switch(game.sword){
		case swordWood:
			game.swordRatio = 0.5;
			break;
		case swordSteel:
			game.swordRatio = 1;
			break;
		case swordExcalibur:
			game.swordRatio = 2;
			break;
	}

	game.armor = requestInteger('Choisir une armure : 1=cuivre, 2=fer, 3=magique', 1, 3);

	switch(game.armor){
		case armorCopper:
			game.armorRatio = 1;
			break;
		case armorIron:
			game.armorRatio = 1.25;
			break;
		case armorMagical:
			game.armorRatio = 2;
			break;
	}
}

function computeDragonDamagePoints(){
	var damagePoint;

	if(game.level === levelEasy){
		damagePoint = getRandomInteger(10, 20);
	}
	else{
		damagePoint = getRandomInteger(30, 40);
	}
	return Math.round(damagePoint / game.armorRatio);
}

function computePlayerDamagePoints(){
	var damagePoint;
	switch(game.level){
		case levelEasy : 
			damagePoint = getRandomInteger(25, 30);
			break;
		case levelNormal :
			damagePoint = getRandomInteger(15,20);
			break;
		case levelHard :
			damagePoint = getRandomInteger(5,10);
			break;
	}
	return Math.round(damagePoint * game.swordRatio);
}

/************************************************************************************/
/********************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

function gameLoop(){
	var damagePoint;
    var dragonSpeed;
    var playerSpeed;

	while(game.hpPlayer > 0 && game.hpDragon > 0){
		dragonSpeed = getRandomInteger(10,20);
		playerSpeed = getRandomInteger(10,20);

		if(dragonSpeed > playerSpeed){
			damagePoint = computeDragonDamagePoints();
			game.hpPlayer -= damagePoint;
			console.log('Le dragon est plus rapide, il vous enlève ' + damagePoint + ' PV');
		}
		else{
			damagePoint = computePlayerDamagePoints();
			game.hpDragon -= damagePoint;
			console.log('Vous êtes plus rapide, vous défoncez la gueule du dragon et lui enlevez ' + damagePoint + ' PV');
		}
	game.round++
	}
}

function showGameState(){
    console.log('Dragon : ' + game.hpDragon + ' PV, ');
    console.log ('joueur : ' + game.hpPlayer + ' PV');
}

function showGameWinner(){
    if(game.hpDragon <= 0){
        showImage('images/chevalier.jpg');
        console.log("Vous avez gagné!");
        console.log("Il vous restait " + game.hpPlayer + " PV");
    }
    else{
        showImage('images/dragon.jpg');
        console.log("Le dragon a crâmé votre gueule");
        console.log("Il restait " + game.hpDragon + " PV au dragon");
    }
}

function startGame(){
	initializeGame();
	console.log('Points de vie au départ :');
	showGameState();
	gameLoop();
	showGameState();
	showGameWinner();
}

startGame();