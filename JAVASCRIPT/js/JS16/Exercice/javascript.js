var filtre=new RegExp('^[a-zA-Z]+$');
var filtrecp=new RegExp('^[0-9]{5}$');
var filtremail=new RegExp('^[a-zA-Z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$')
var form=document.getElementById('form1');
var societe=document.getElementById('societe-error');
var contact=document.getElementById('contact-error');
var codepostal=document.getElementById('code-postal-error');
var ville=document.getElementById('ville-error');
var mail=document.getElementById('mail-error');
form.querySelector("#button1").onclick  = function(e) {
    societe.innerHTML="";
    contact.innerHTML="";
    codepostal.innerHTML="";
    ville.innerHTML="";
    mail.innerHTML="";
    if (form.elements['societe'].value=='')
    {
        societe.innerHTML="Veuillez remplir le champ société";
        e.preventDefault();
        
    }else if(filtre.test(form.elements['societe'].value)==false)
    {
        societe.innerHTML="le champ n'a pas été rempli correctement";
        e.preventDefault();
        
    }
    if (form.elements['contact'].value=='')
    {
        contact.innerHTML="Entrez le nom de la personne à contacter";
        e.preventDefault();
        
    }else if(filtre.test(form.elements['contact'].value)==false)
    {
        contact.innerHTML="le champ n'a pas été rempli correctement";
        e.preventDefault();
       
    }
    if (form.elements['codepostal'].value=='')
    {
        codepostal.innerHTML="Veuillez saisir le Code Postal";
        e.preventDefault();
        
    }else if(filtrecp.test(form.elements['codepostal'].value)==false)
    {
        codepostal.innerHTML="Le champ n'a pas ete rempli correctement";
        e.preventDefault();
       
    }
    if (form.elements['ville'].value=='')
    {
        ville.innerHTML="Veuillez saisir la Ville";
        e.preventDefault();
        
    }else if(filtre.test(form.elements['ville'].value)==false)
    {
        ville.innerHTML="Le champ n'a pas ete rempli correctement";
        e.preventDefault();
        return;
    }
    if (form.elements['mail'].value=='')
    {
        mail.innerHTML="Veuillez saisir une adresse mail valide";
        e.preventDefault();
        
    }else if(filtremail.test(form.elements['mail'].value)==false)
    {
        mail.innerHTML="Le champ n'a pas ete rempli correctement";
        e.preventDefault();
        
    }
}