//document.ready function som får jqerry att vänta tills domen är färdig
$(document).ready(function ()
{
    //.get function som hämtar ut nyheterna från en länk på nätet i en php fil.
    $.get('http://ofcourse.oru.se/~IK2009/xml/get_news.php', function (data) {//här så tar vi och laddar in allt i data
        $(data).find('article').each(function(){ //här så tar vi och letar efter classen artikel och för vare gång den hittar det loppar den igenom functionen
            var $article = $(this); //Laddar in det man hittar i article

            var html ='<h2 class="newsTitle">'; 
            html += $article.find('title').text(); //Lägger in rubriken från artikeln i en h2 tag
            html += '</h2><p class="newsBody">';
            html += $article.find('bodytext').text(); //Lägger in strötexten från artikeln i en p tag
            html += '</p><p class="newsDate">';
            html += $article.find('date').text(); //Lägger in datumet från artikeln i en p tag
            html += '</p></div>';

            $('#news').append($(html)); //Här man använder vi append och diven news för att lägga in det vi fått ut i diven news
        });
    });
});