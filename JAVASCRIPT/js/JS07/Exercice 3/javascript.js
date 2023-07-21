var Num1, Num2, op;

do{

Num1=window.prompt("Saisissez le premier nombre : ");
Num2=window.prompt("Saisissez le deuxième nombre : ");
op=window.prompt("Saisissez un opérateur : ");
if (isNaN(Num1)==true||isNaN(Num2)==true||(op!='+'&&op!='-'&&op!='/'&&op!='*'))
{
    window.alert('données saisies non valides.');
}
}while (op!='+'&&op!='-'&&op!='*'&&op!='/'||isNaN(Num1)==true||isNaN(Num2)==true)
if (op=='+')
{
 window.alert('la somme des deux nombres saisi : ' + Num1 +' et ' +Num2 + ' vaut '+ ((+Num1)+(+Num2)));
}else if (op=='-')
{
 window.alert('la soustraction des deux nombres saisi : ' + Num1 +' et ' +Num2 + ' vaut '+ (Num1-Num2));
}else if (op=='*')
{
 window.alert('la multiplication des deux nombres saisi : ' + Num1 +' et ' +Num2 + ' vaut '+ (Num1*Num2));
}else if (op=='/')
{
 window.alert('la division des deux nombres saisi : ' + Num1 +' et ' +Num2 + ' vaut '+ (Num1/Num2));   
}

console.log(Num1);
console.log(Num2);