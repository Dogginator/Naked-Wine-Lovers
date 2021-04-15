

function  klickaknapp1() {
    var emailTextbox = document.querySelector('#email');
    var NyhetsbrevCheckbox = document.querySelector('#Nyhetsbrev');
    var firstNameTextbox = document.querySelector('#fristName');
    var lastNameTextbox = document.querySelector('#lastName');
    var adressTextbox = document.querySelector('#Adress');
    var LghTextbox = document.querySelector('#Lgh');
    var postnummerTextbox = document.querySelector('#Postnummer');
    var ortTextboc = document.querySelector('#Ort');

    var email = +emailTextbox.value;
    var nyhetsbrev = +NyhetsbrevCheckbox.value;
    var firstName = +firstNameTextbox.value;
    var lastName = +lastNameTextbox.value;
    var adress = +adressTextbox.value;
    var lgh = +LghTextbox.value;
    var postnummer = +postnummerTextbox.value;
    var ort = +ortTextboc.value;
    var svar = [email, nyhetsbrev, firstName, lastName, adress,lgh,postnummer, ort];
    
    //Skriv ut svaret i textrutan med id=svar
    var svarTextbox = document.querySelector('#svar');
    svarTextbox.value = svar;


}
 export default klickaknapp1();
