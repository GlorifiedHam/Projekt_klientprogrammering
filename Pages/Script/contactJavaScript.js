$(document).ready(function() { 
	function checkIfEmpty(data){
return /^\s*$/.test(data);
		
}

function validateEmail(data){

var reg =/^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
return reg.test(data);
//^= start with
//$= end with

}

$('#submit').click(function () {

if(checkIfEmpty(document.forms["form1"]["Epost"].value)){
alert("Email kan inte vara tomt" /*lägg till autofocus*/)

}

else if(checkIfEmpty(document.forms["form1"]["amne"].value)){
alert("Ämne kan inte vara tomt" /*lägg till autofocus*/ )
}

else if(checkIfEmpty(document.forms["form1"]["fraga"].value)){
	alert("Du måste ange en fråga ")
}

else if(!validateEmail(document.forms["form1"]["Epost"].value)){
alert("Fel format på emailen ")

}
 else
    $.ajax({
        url: 'http://ofcourse.oru.se/~IK2009/contactform/contact_form.php',
        type: 'GET',

        success: function(msg) {
        alert(msg);
        },

        error: function() {
            alert('Nu var det något som gick fel :(');
        }
    });

});
});




