$(document).ready(function() { 
 function checkIfEmpty(data){ // funktion  för validering av tomma samt spacade fält
return /^\s*$/.test(data); // Validering tomma samt spacade fält, returerar true om det är tomt eller är spacat
}

function validateEmail(data){ // Funktion för email validering
var emailTest =/^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/; /* Validering av email. Ser över att första delen av mailet enbart 
innehålller "A-Z, a-z,0-9, _,  \ , - och ." dessa kan användas en gång eller fler,  andra delen skall innehålla @ sedan får man använda A-z, a-z, 0-9, _, \, . 
dessa kan användas en gång eller flera, den sista delen ska starta med . och får innehålla A-Z, a-z detta är tillåtet 2 gånger*/
return emailTest.test(data); // True om email fältet input är rätt skrivet 
//^= start with
//$= end with

}

$('#submit').click(function (){ // funktion som sker när man trycker på submit knappen

if(checkIfEmpty(document.forms["form1"]["epost"].value)){ /*Validering av email så den inte är tom, om den är tom, skickar den ut ett alert samt focuserar email fältet*/
alert("Email kan inte vara tomt" );
 document.forms["form1"].elements["epost"].focus();
}

else if(checkIfEmpty(document.forms["form1"]["amne"].value)){ /*Validering av ämne så den inte är tom, om den är tom, skickar den ut ett alert samt focuserar ämne fältet*/
alert("Ämne kan inte vara tomt"  );
document.forms["form1"]["amne"].focus();

}

else if(checkIfEmpty(document.forms["form1"]["fraga"].value)){ /*Validering av fraga så den inte är tom, om den är tom, skickar den ut ett alert samt focuserar fraga fältet*/
 alert("Du måste ange en fråga ");
 
  document.forms["form1"]["fraga"].focus();
}

else if(!validateEmail(document.forms["form1"]["epost"].value)){ /*Använder functionen validateEmail för att se att email fältets input matchar om det gör det skickas det ut ett alert samt focuserar på email fältet*/
alert("Fel format på emailen ");
document.forms["form1"]["epost"].focus();
}

else{ /* Om all validering går igenom så skickas informationen till url http://ofcourse.oru.se/~IK2009/contactform/contact_form.php då får vi antingen ett succsess meddelade eller ett error meddelande beroende på om allt gått rätt till
efter att informationen skickats så kommer formuläret på sidan tömmas.*/
	
     $.ajax({
url: 'http://ofcourse.oru.se/~IK2009/contactform/contact_form.php',
type: 'GET',
success: function(msg) {
alert(msg); 

$( '.form1' ).each(function(){ // Do some thing to all elemtents in form1
    this.reset();  // Resets the form
});
},
error: function() {
alert('Nu var det något som gick fel :(');
}
});





}
});
});