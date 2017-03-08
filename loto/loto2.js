'use strict';

var possibilities = [];
var probabilityCompare = function(a,b){ // COMPARATEUR
	if(a.probability < b.probability){ // si la propriété probabilité pour a est inférieure à la propriété probabilité pour b
		return -1;
	}
	if(a.probability > b.probability){ // comme il y a un return dans le if précédent pas besoin de else
		return 1;
	}
	return 0; // return 0 pour tous les autres cas c'est à dire, ici, égalité.
};

for(var i=1; i<=49; i++){
	possibilities.push({numero : i, probability : Math.random()});
}

possibilities.sort(probabilityCompare); // remplace le tableau possibilities précédent par un tableau possibilities trié en utilisant le comparateur.

var tirage = possibilities.map(function(elem){return elem.numero;}); // retourne un tableau contenant exclusivement les valeurs des numéros dans l'ordre établi précédemment.

document.write('Voici le tirage du loto : ' + tirage.slice(0,5).join(' - ')); // slice permet de retourne un sous ensemble du tableau de tirage sous forme de tableau.



/* Le loto :

un nombre donné de numéros dans un tirage (en France, 5)

ces numéros sont choisis au hasard dans un intervalle donné (en France entre 1 et 49 inclus)

chaque numéro ne peut être tiré qu'une seule fois

==> raisonnement 2 : 

1/ un tableau contient des objets ayant 2 membres : 
 - Le numéro de la boule de loto
 - Un nombre tiré aléatoirement grâce à la méthode random de l'objet Math
2/ En triant les éléments du tableau dans l'ordre croissant (ou décroissant) de leur nombre aléatoire attribué, 
3/ Puis en sélectionnant les X premières (en fonction du nombre de boules que l'on veut dans un tirage) on obtient un tirage de loto.


arr.indexOf(élémentRecherché[, indiceDébut = 0])

*/