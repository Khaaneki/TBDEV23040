var mot;
var tab=['a','e','i','o','u','y'];
var maChaine="certes";
var nbvoyelle=0;
var maChaine1,maChaine2;
var mot1,mot2;
var taille;
/*var consonnes;
console.log(maChaine.length);
taille = maChaine.length;*/
var nbvoyelle=0
do {
mot = window.prompt('Saisissez un mot ');
}while (isNaN(mot)==false)

for (j=0;j<mot.length;j++)
{
    for (i=0;i<tab.length;i++)
    {
        if (mot.indexOf(tab[i])!=-1)
        {
         nbvoyelle++;
         console.log(nbvoyelle);
        if (mot.indexOf(tab[i])!=mot.length&&mot.indexOf(tab[i])!=0)
        {
            console.log(mot.indexOf(tab[i]));
            mot2=mot.substring((mot.indexOf(tab[i])+1),(mot.length));
            console.log(mot2);
            mot1=mot.substring(0,(mot.indexOf(tab[i])));
            console.log(mot1);
            mot=mot1+mot2;
            console.log(mot);
        }else if (mot.indexOf(tab[i])==0)
        {
         mot=mot.substring((mot.indexOf(tab[i])+1),(mot.length));
         console.log(mot);
        }else if (mot.indexOf(tab[i])==mot.length)
        {
         mot=mot.substring(0,mot.length-1);
         console.log(mot);
        }
        }
    }
}
console.log(nbvoyelle);
window.alert('il y a '+nbvoyelle+' voyelle dans le mot');

console.log(maChaine.indexOf('e'));
maChaine2=maChaine.substring((maChaine.indexOf('e')+1),maChaine.length);
maChaine1=maChaine.substring(0,maChaine.indexOf('e'));
maChaine=maChaine1+maChaine2;
nbvoyelle++;
console.log(maChaine);
maChaine2=maChaine.substring((maChaine.indexOf('e')+1),maChaine.length);
maChaine1=maChaine.substring(0,maChaine.indexOf('e'));
maChaine=maChaine1+maChaine2;
console.log(maChaine);
nbvoyelle++;
//consonnes=taille-nbvoyelle;