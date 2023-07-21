var nombre;
do{
nombre=window.prompt('saisir un nombre');
}while(isNaN(nombre)==true)
for (i=0;i<nombre;i++){
    document.write(i+' ');
}