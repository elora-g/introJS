'use strict';

window.alert("Bienvenue dans ce jeu de devinette !");

function nbAleatoire(min, max){
	return Math.floor(min + (Math.random() * (max-min+1)));
}

var solution = nbAleatoire(1,100);
var input;
var proposition;
var propositions = [];
const maxTry = 10;
var resultFound = false; // permet d'améliorer la lisibilité du code et d'éviter le if i>maxTry

window.alert('Attention, tu as maximum ' + maxTry + ' essais pour deviner le juste nombre.');

for(var i = 1; i <= maxTry && !resultFound; i++){ // pas besoin de parenthèses opérateurs d'ordre prio sur opé booléens
	do{
		input = window.prompt('Entrez ici votre nombre solution à la devinette');
		proposition = parseInt(input);
	} while(input !== null && isNaN(proposition)); // cliquer sur "annuler" retourne la valeur null
	if(input === null){
		window.alert('Le jeu est terminé');
		break; // on peut utiliser break dans une boucle pour en sortir en ignorant les autres conditions
	}
	propositions.push(proposition); // Méthode push des tableaux : ajoute un élément en fin de tableau
	if(proposition < solution){
		window.alert(proposition + ' est trop petit');
	} else if(proposition > solution){
		window.alert(proposition + ' est trop grand');
	}
	else{
		document.write('Bien joué! La solution est bien : <strong>' + solution +'</strong><br>');
		document.write('<br>Tu as eu besoin de <strong>' + i + ' essais</strong><br>');
		document.write('<br>Voici toutes tes propositions : <strong>' + propositions.join(' - ') + '</strong>'); 

		/* Utiliser for pour parcourir le tableau.
		for(var j in propositions){
		document.write('<br>Ta proposition numéro '+ (parseInt(j)+1) +' : '+ propositions[j]);
		} */

		resultFound = true; // on change la valeur de resultFound quand il a été  trouvé
	}
}

if(!resultFound){ // équivalent à resultFound === false
	document.write('Dommage, La solution était ' + solution);
}

/* Utiliser une boucle while plutôt qu'une boucle for
var i=1; (on doit initialiser la variable i avant la boucle while)
while((i <= maxTry) && !resultFound){
Même code sauf qu'on ajoute un i++ avant le propositions.push(proposition)
} */

/* instruction continue permet d'interrompre l'exécution de l'itération en cours et de passer à l'itération suivante */


