'use strict';

var taille = parseInt(window.prompt('Quelle taille voulez vous pour votre table?'));
var ligne;
var colonne;
var table = [];

for(ligne = 1; ligne <= taille; ligne++){
	table[ligne] = new Array(); // la deuxième dimension de mon tableau (vertical)
	document.write('<tr>');
	for(colonne = 1; colonne <= taille; colonne++){
		if (ligne === colonne){
			document.write('<td class="diagonale">' + ligne*colonne + '</td>');
			table[ligne][colonne] = ligne*colonne;
		}
		else{
			document.write('<td>' + ligne*colonne + '</td>');
			table[ligne][colonne] = ligne*colonne;
		}
	}
}

