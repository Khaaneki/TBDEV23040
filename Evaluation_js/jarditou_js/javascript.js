var filtre=new RegExp('^[a-zA-Z]+$');
var filtrecp=new RegExp('^[0-9]{5}$');
var filtremail=new RegExp('^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}.[a-zA-Z]{2,4}$')
var form=document.getElementById('form1');
var nom=document.getElementById('nom-error');
var prenom=document.getElementById('prenom-error');
var sex=document.getElementById('sex-error');
var date=document.getElementById('date-error');
var codepostal=document.getElementById('code-postal-error');
var mail=document.getElementById('mail-error');
var sujet=document.getElementById('sujet-error');
var votreQuestion=document.getElementById('question-error');
var conditions=document.getElementById('conditions-error');
form.querySelector("#button1").onclick  = function(e) {
    nom.innerHTML="";
    prenom.innerHTML="";
    sex.innerHTML="";
    date.innerHTML="";
    codepostal.innerHTML="";
    mail.innerHTML="";
    sujet.innerHTML="";
    votreQuestion.innerHTML="";
    conditions.innerHTML="";
    if (form.elements['nom'].value=='')
    {
        nom.innerHTML="Veuillez saisir votre nom";
        e.preventDefault();
        
    }else if(filtre.test(form.elements['nom'].value)==false)
    {
        nom.innerHTML="le champ n'a pas été rempli correctement";
        e.preventDefault();
        
    }
    if (form.elements['prenom'].value=='')
    {
        prenom.innerHTML="Veuillez saisir votre prenom";
        e.preventDefault();
        
    }else if(filtre.test(form.elements['prenom'].value)==false)
    {
        prenom.innerHTML="le champ n'a pas été rempli correctement";
        e.preventDefault();
       
    }
    if (form.elements['sex'].value=='')
    {
        sex.innerHTML="Veuillez choisir le sexe";
        e.preventDefault();
        
    }
    if (form.elements['date'].value=='')
    {
        date.innerHTML="Veuillez saisir la Date";
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
    if (form.elements['sujet'].value=='')
    {
        sujet.innerHTML="Veuillez saisir un sujet";
        e.preventDefault();
        
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
    if (form.elements['votreQuestion'].value=='')
    {
        votreQuestion.innerHTML='Veuillez renseigner la question.';
        e.preventDefault();
    }
    if (form.elements['conditions'].checked==false)
    {
        conditions.innerHTML='Veuillez cocher la case SVP.';
        e.preventDefault();
    }

}