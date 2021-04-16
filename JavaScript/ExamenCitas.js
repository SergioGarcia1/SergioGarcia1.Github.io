function AForm(){

    var AJason = '{"quoteText": "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.", "quoteAuthor" : "Marcel Proust" , "senderName" : "-" , "senderLink" : "-" , "quoteLink" :"http://forismatic.com/en/3fe08c5b2e/"}';
    var Convertir = JSON.parse(AJason);
        console.log(Convertir);

        document.querySelector("#Mostrar").value = Convertir.quoteText +  " " +  Convertir.quoteAuthor + " " + Convertir.senderName + " " + Convertir.senderLink + " " + Convertir.quoteLink;
    
    
  }

  document.querySelector("#btnFormulario").addEventListener("click",AForm);


  