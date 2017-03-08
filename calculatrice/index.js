// Utilisation du mode strict de JS//
'use strict'

// Déclaration de variables//
var nombre1;
var nombre2;
var operation;
var resultat;

// Message d'accueil pour le client//
window.alert('Bienvenue sur votre calculatrice');

// Récupération des informations//
nombre1 = parseFloat(window.prompt('Entrez le premier nombre du calcul'));
nombre2 = parseFloat(window.prompt('Entrez le second nombre du calcul'));
operation = window.prompt('Quelle opération souhaitez-vous réaliser?');

// Calcul//

switch(operation)
{
	// Addition//
	case '+':
	case 'addition':
	resultat = nombre1 + nombre2;
	break;

	// Soustraction//
	case '-':
	case 'soustraction':
	case 'différence':
	resultat = nombre1 - nombre2;
	break;

	// Multiplication//
	case 'x':
	case '*':
	case 'produit':
	case 'multiplication':
	resultat = nombre1 * nombre2;
	break;

	// Division//
	case '/':
	case 'division':
	case 'quotient':
	{
		if(nombre2 == 0)
		{
			window.alert('Attention, on ne peut pas diviser par 0!');
			break;
		}
		resultat = nombre1 / nombre2;
		break;
	}

	// Si l'opération rentrée n'est pas dans les opérations ci-dessus //
	default:
	window.alert('Attention, vous avez demandé une opération non reconnue!');
}

// Si le résultat de l'opération n'est pas un nombre //

if(isNaN(resultat) == true)
{
	window.alert('Attention, vous n\'avez pas entré 2 nombres!');
	resultat = undefined;
}

// Si le résultat de l'opération est bien un nombre//

if(resultat != undefined)
{
    document.write('Le résultat de l\'opération est: ' + resultat);
}

