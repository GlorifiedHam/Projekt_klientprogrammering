$(document).ready(function()
{

$.get('http://ofcourse.oru.se/~IK2009/xml/get_news.php',function(data){
$(data).find('article').each(function(){
var $article= $(this);

 
var html ='<h2 class="newsTitle">';
html += $article.find('title').text(); 
html += '</h2><p class="newsBody">';
html += $article.find('bodytext').text();
html += '</p><p class="newsDate">';
html += $article.find('date').text();
html += '</p></div>';
 


 $('#news').append($(html));

});



});

	});