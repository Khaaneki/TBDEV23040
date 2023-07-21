var age;
var test;
do{
age=window.prompt('Saisissez votre age');
console.log(age);
if (age<0||age>120||isNaN(age)==true)
{
    window.alert('l\'age saisi n\'est pas valide');
}
}while ((isNaN(age)==true)||age<0||age>120)

if (age>=18)
{
    test='majeur';
}
else{
    test='mineur';
}
window.alert('l\'age de l\'utilisateur est de '+age + ' l\'utilisateur est '+test);