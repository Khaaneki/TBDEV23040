var tableau = new Array();
var nombre,somme,moyenne;
somme=0;
do
{
do{
    nombre = window.prompt('Saisissez un nombre');
    if (isNaN(nombre)==true)
    {
      window.alert('saisie incorrecte');
    }
}while (isNaN(nombre)==true)
if(nombre!=0)
{
 tableau.push(nombre);
}
}while (nombre!=0)

//somme
for (i=0;i<tableau.length;i++)
{
    somme+=(+tableau[i]);
}
moyenne=somme/tableau.length;
console.log('La somme vaut '+somme +'\nLa moyenne vaut '+moyenne);
alert('La somme vaut '+somme +'\nLa moyenne vaut '+moyenne);