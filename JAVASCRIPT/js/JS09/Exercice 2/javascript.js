function strtok (str1,str2,n)
{
let tableau=str1.split(str2);
console.log(tableau);
return tableau[n-1];
}
var n;
const separateur=';';
var strtest="robert ;dupont ;amiens ;80000";
document.write('Voici la chaîne '+strtest);
n=window.prompt('Saisissez l\'élément à extraire (saisir nombre)');
var strtop2=strtok(strtest,separateur,n);
var strtop=strtok(strtest,separateur,3);
document.write('<br>Vous avez extrait '+strtop);
document.write('<br>Vous avez extrait '+strtop2);
