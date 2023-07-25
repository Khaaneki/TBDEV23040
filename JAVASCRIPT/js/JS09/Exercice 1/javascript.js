var x,y,produit;

function afficheImg(image)
{
    let imageL=document.createElement ("img");
    imageL.src=image;
    document.body.appendChild(imageL);
}
function leProduit(a,b)
{
let resultat;
resultat=a*b;
return (resultat);
}
function cube(a)
{
   let cube=a*a; 
   return (cube);
}
x=window.prompt("entrer un nombre");
y=window.prompt("entrer un multiplicateur");
afficheImg('ASSETS/papillon.jpg');
produit=cube(x);
document.write('<br> le cube de '+x+' est égal à '+produit);
produit=leProduit(x,y);
document.write('<br> Le produit de '+x+' x '+y+' est égal à ' +produit);