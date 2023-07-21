var age;
var test;
var anneeUtilisateur;
var date = new Date();
var annee = date.getFullYear();
    anneeUtilisateur=window.prompt('Saisissez votre année de naissance');
    age = annee-anneeUtilisateur;
    window.alert('votre age est de : '+age);
    
if  (age>=18)
{
    test='majeur';
}
else
{
    test='mineur';
}

window.alert (/*'Vous avez '+  + */' L\'utilisateur est '+test);