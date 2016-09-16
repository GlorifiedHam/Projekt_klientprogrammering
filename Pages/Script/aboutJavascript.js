 $(document).ready(function(){


$.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',function (data) {
if (data.status == 1) { // Lyckades
// kommer hit.


$('#output').append(
'<br />' + data.result.orebro.name + data.result.orebro.address + data.result.orebro.phone + '<br />'+
'<br />' + data.result.goteborg.name + data.result.goteborg.address + data.result.goteborg.phone + '<br />'+
'<br />' + data.result.toronto.name + data.result.toronto.address + data.result.toronto.phone + '<br />'+
'<br />' + data.result.snoqualmie.name + data.result.snoqualmie.address + data.result.snoqualmie.phone + '<br />'+
'<br />' + data.result.sheffield.name + data.result.sheffield.address + data.result.sheffield.phone + '<br />'


);

}
else { // Misslyckades
 Felmeddelande:
$('#output').text(data.message);
};

});



functionMapClick(city){

	$.getJSON(
'http://ofcourse.oru.se/~IK2009/json/get_office.php',
{city},
function (data) {
if (data.status == 1) { // Lyckades
// Resultat:
$('#mapAnswer').text(data.result.city);
} else { // Misslyckades
// Felmeddelande:
$('#mapAnswer').text(data.message);
}
}
);


}

});
/* var html = '';
$.each(data, function(entryIndex, entry){
html+='<div class = "entry">';
html+='<h3 class = name>' + entry.name + '<h3>';
html+='<div class = adress>' + entry.adress + '</div>';
html+='<div class = phone>' + entry.phone + '</div>';
html += '</div>';
console.log(data.result[entryIndex].adress) ;
});
$('#output').html(html);


}
*/


