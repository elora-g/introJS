'use strict'

var date=new Date()
var tab_jour=["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var tab_mois=["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
document.write("Nous sommes le "+tab_jour[date.getDay()]+" "+date.getDate()+" "+tab_mois[date.getMonth()]+" "+date.getFullYear());

var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();

document.write("<br>Il est "+h+"h "+m+"min "+s+"sec <br>");