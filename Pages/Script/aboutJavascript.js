$.getJSON(
'http://ofcourse.oru.se/~IK2009/json/get_office.php',
{},
function (data) {
if (data.status == 1) { // Lyckades
// Resultat:
for (var i = 0; i < data.result.length; i++) {
	$('#output').append(
data.result[i].name + data.result[i].adress + data.result[i].phone + '<br />')
};
} else { // Misslyckades
// Felmeddelande:
$('#output').text(data.message);
}
}
);