// Utilisation du mode strict de JS//
'use strict';

// Message d'accueil pour le client//
window.alert('Bienvenue sur votre calculatrice TVA');

// Déclaration de variables//
const TVA = 0.2;
var montantHT = parseFloat(window.prompt('Entrez votre montant HT'));
var montantTVA = montantHT * TVA;
console.log(montantTVA);
var montantTVAarr = Math.round(montantTVA*100)/100;
var montantTTC = montantTVAarr + montantHT;

// Affichage du résultat //

document.write('Pour rappel, le taux de TVA est de 20%');
document.write('<br>Le montant HT entré est: '+ montantHT + ' euros');
document.write('<br>Votre TVA sera de: '+ montantTVAarr + ' euros');
document.write('<br>Le montant TTC est: '+ montantTTC + ' euros');