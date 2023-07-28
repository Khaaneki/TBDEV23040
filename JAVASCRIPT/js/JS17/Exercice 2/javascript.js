    function multplication()
    {
        var result=""
        var nbr=parseInt(window.prompt("Entrer un nombre pour afficher sa table de multiplication"))
    for(i=1;i<=10;i++)
    {
        var egal=nbr*i
        result+=nbr+"x"+i+"="+egal+"<br>"
    }
    document.write(result)
    }
    multplication();