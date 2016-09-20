 $(document).ready(function(){

 


$.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',function (data) {
if (data.status == 1) { // Lyckades
// kommer hit.

console.log(data.result.gotebrog);
$('#output').append(
data.result.orebro.name +' Adress:  '+  data.result.orebro.address +' Phone: '+ data.result.orebro.phone + '<br />'+
'<br />' + data.result.goteborg.name + ' Adress: ' + data.result.goteborg.address +'  Phone: '+ data.result.goteborg.phone + '<br />'+
'<br />' + data.result.toronto.name + ' Adress: ' +data.result.toronto.address + ' Phone: ' +data.result.toronto.phone + '<br />'+
'<br />' + data.result.snoqualmie.name +'  Adress: '+ data.result.snoqualmie.address +'  Phone: '+ data.result.snoqualmie.phone + '<br />'+
'<br />' + data.result.sheffield.name +'  Adress: '+ data.result.sheffield.address +' Phone: '+ data.result.sheffield.phone + '<br />'


);

}
else { // Misslyckades
 Felmeddelande:
$('#output').text(data.message);
};

});



});






