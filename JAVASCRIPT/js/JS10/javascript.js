function createTab(n)
{
    let myTableau=new Array(n);
    for (i=0;i<n;i++)
    {
        myTableau[i]=window.prompt('Saisir la '+(i+1)+' valeur du tableau');
    }
    return myTableau;
}
var souler=document.getElementById('tumassouler');
var x=window.prompt('Veuillez renseigner la taille du tableau');
var tableau=createTab(x);
souler.innerHTML=tableau;