//<![CDATA[
    var jeune=0
    var jeunes="s"
    var moyen=0
    var moyens="s"
    var senior=0
    var saisi=0
    do{saisi=parseInt(window.prompt("Entrez votre âge (on s'arrête des un centenaire)"))
    if(saisi<20)
    {
        jeune++
    }
    if(saisi>=20&&saisi<=40)
    {
        moyen++
    }
    if(saisi>40)
    {
        senior++
    }
}while(saisi<100)
if(jeune<=1)
{
    var jeunes=""
}
if(moyen<=1)
{
    var moyens=""
}
document.write("il y a "+jeune+" jeune"+jeunes+", "+moyen+" moyen"+moyens+", "+senior+" vieux ")