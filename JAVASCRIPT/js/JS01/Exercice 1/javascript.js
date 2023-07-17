var num1,num2,tot,C,F ; 
var prenom = "Jean" ;
var reponse1 = window.prompt("Saisissez votre Nom");
var reponse2 = window.prompt("Saisissez votre Prénom");
num1=window.prompt('Saisissez le premier nombre');
num2=window.prompt('Saisissez le deuxième nombre');
tot=num1*num2;

C=window.prompt('quel température il fait aujourd\'hui');
F=(C*9/5) + 32;

alert("Bonjour, "+reponse1+" "+reponse2+'\nle produit des deux nombres est '+ tot +'\naujourd\'hui il fait chaud il fait '+C +'°C\n En fahrenheit ' + F+'°F');