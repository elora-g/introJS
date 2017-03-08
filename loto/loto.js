'use strict';

const numberOfResults = 5;

var result = [];

while(result.length < numberOfResults){
	var number = getRandomInteger(1,49);
	if(result.indexOf(number) === -1){
		result.push(number);
	}
}

document.write('Voici le tirage du loto : ' + result.join(' - '));

/* Le loto :

un nombre donné de numéros dans un tirage (en France, 5)

ces numéros sont choisis au hasard dans un intervalle donné (en France entre 1 et 49 inclus)

chaque numéro ne peut être tiré qu'une seule fois

==> raisonnement : 

1/ on tire un numéro au hasard
2/ on le stocke dans un tableau
3/ tant que le tableau ne contient pas le nombre de numéros imposé par le tirage le jeu continue
4/ si un numéro est déjà dans le tableau on doit retirer un nouveau numéro


arr.indexOf(élémentRecherché[, indiceDébut = 0])

*/