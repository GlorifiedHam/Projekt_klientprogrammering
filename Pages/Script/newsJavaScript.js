$(document).ready(function()
{

 
$.get('xml/News.xml',function(data){
	  $('#a').empty();
$(data).find('article').each(function(){
var $article= $(this);

var html = '<div class ="xmlNews">';
html+='<h1 class="newsTitle">';
html += $article.find('title').text();
html += '</h1>';
html += '<p class="newsBody">';
html += $article.find('bodytext').text();
html += '</p>';
html += '<p class="newsDate">';
html += $article.find('date');
html += '</p>';
html += '</div>';
 


 $('#a').append($(html));

});



});

	});