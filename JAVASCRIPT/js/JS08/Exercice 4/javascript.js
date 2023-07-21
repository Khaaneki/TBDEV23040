var N,X;
do{
    N = window.prompt('Saisissez un nombre');
    X = window.prompt('Saisissez un nombre');
    if (isNaN(X)==true||(isNaN(N))==true)
    {
      window.alert('saisie incorrecte');
    }
}while (isNaN(X)==true||isNaN(N)==true)
for (i=1;i<=N;i++)
{
    document.write(i+' x '+X+' = '+ (i*X)+'<br>');
}