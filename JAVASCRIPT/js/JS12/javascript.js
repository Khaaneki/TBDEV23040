function calcul(tab)
{
    let somme=0;
    let moyenne;
    let taille=tab.length;
    for (i=0;i<tab.length;i++)
    {
        somme+=Number(tab[i]);
    }
    moyenne=somme/taille;
    console.log('La taille du tableau est de '+taille+'\nLa somme vaut '+somme+'\nLa moyenne vaut '+moyenne);
}
function createTab()
{
    let myTableau=[];
    let chaine;
    let i=1;
    do
    {
    chaine=window.prompt('Saisir la '+ i +' valeur du tableau (0 pour arrêter)');
    if(chaine!='0')
    {
     myTableau.push(chaine);
    }
    i++;
    }while(chaine!=0)
    return myTableau;
}
var tableau=createTab();
console.log(tableau);
calcul(tableau);