    var tab=["Audrey","Aurélien","Flavien","Jérémy","Laurent","Melik","Nouara","Salem","Samuel","Stéphane"];
    var saisi=window.prompt("liste des prénoms "+tab+", entrer le prénom à effacer : ")
    document.write("liste "+tab+"<br><br>")
    var suprenommin=String(saisi).charAt(0).toUpperCase()+String(saisi).slice(1).toLowerCase();
    if(tab.includes(suprenommin))
    {
        tab.splice(tab.indexOf(suprenommin),1);
        tab.push(" ");
        alert("Voici la nouvelle liste "+tab)
        console.log(tab)
        document.write("Voici la nouvelle liste "+tab)
    }else
    {
        alert("je n'ai pas trouvé le prénom")
        console.log(tab)
    }