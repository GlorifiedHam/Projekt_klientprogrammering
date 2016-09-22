//document.ready function som f�r jqerry att v�nta tills domen �r f�rdig
$(document).ready(function ()
{
    //.get function som h�mtar ut nyheterna fr�n en l�nk p� n�tet i en php fil.
    $.get('http://ofcourse.oru.se/~IK2009/xml/get_news.php', function (data) {//h�r s� tar vi och laddar in allt i data
        $(data).find('article').each(function(){ //h�r s� tar vi och letar efter classen artikel och f�r vare g�ng den hittar det loppar den igenom functionen
            var $article = $(this); //Laddar in det man hittar i article

            var html ='<h2 class="newsTitle">'; 
            html += $article.find('title').text(); //L�gger in rubriken fr�n artikeln i en h2 tag
            html += '</h2><p class="newsBody">';
            html += $article.find('bodytext').text(); //L�gger in str�texten fr�n artikeln i en p tag
            html += '</p><p class="newsDate">';
            html += $article.find('date').text(); //L�gger in datumet fr�n artikeln i en p tag
            html += '</p></div>';

            $('#news').append($(html)); //H�r man anv�nder vi append och diven news f�r att l�gga in det vi f�tt ut i diven news
        });
    });
});