$(document).ready(function() { 
 function checkIfEmpty(data){
return /^\s*$/.test(data);
  
}

function validateEmail(data){

var emailTest =/^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
return emailTest.test(data);
//^= start with
//$= end with

}

$('#submit').click(function (){
if(checkIfEmpty(document.forms["form1"]["epost"].value)){
alert("Email kan inte vara tomt" /*lägg till autofocus*/);
 document.forms["form1"].elements["epost"].focus();
}

else if(checkIfEmpty(document.forms["form1"]["amne"].value)){
alert("Ämne kan inte vara tomt" /*lägg till autofocus*/ );
document.forms["form1"]["amne"].focus();

}

else if(checkIfEmpty(document.forms["form1"]["fraga"].value)){
 alert("Du måste ange en fråga ");
 
  document.forms["form1"]["fraga"].focus();
}

else if(!validateEmail(document.forms["form1"]["epost"].value)){
alert("Fel format på emailen ");
document.forms["form1"]["epost"].focus();
}

else{
	
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