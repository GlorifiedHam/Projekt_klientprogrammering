$('#submit').click(function () {

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