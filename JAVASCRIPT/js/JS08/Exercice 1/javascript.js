var tableau = [];
var saisie;
var filtre = new RegExp();
do{
    saisie = window.prompt('Saisir un prénom');
    if(saisie!=''&&isNaN(saisie)==true)
    {
    tableau.push(saisie);
    }
}while (saisie!='')
console.log('nombre de prénom saisi : ' +tableau.length + '\n'+tableau);