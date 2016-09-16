 $(document).ready(function(){


$.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',function (data) {
if (data.status == 1) { // Lyckades
// kommer hit.


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



/* functionMapClick(city){

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
 */
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


