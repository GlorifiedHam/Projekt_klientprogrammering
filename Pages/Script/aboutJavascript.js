$(document).ready(function() {
     $('.map1').maphilight(); // Ger röd border samt mörkbakgrund för våra klick bara zoner i vår bild karta



var $kontorDiv = $("#output"); // Skapar en variabel för #output
$kontorDiv.hide(); // Gömmer div:en #output
$('a.kontor').click(function(event){ // funktion för vad som händer om man klickar på länken kontor
event.preventDefault();// prevent default function av a.kontor
if($kontorDiv.is(':hidden')){ /* Om kontor diven är inte gömt kommer infromationen att fada in sakata om man klickar på knappen, annars kommer 
    den att fada ut om man klickar på knappen*/
$kontorDiv.fadeIn('slow');
$(this).text('Se mindre');
}else{
$kontorDiv.fadeOut('slow');
$(this).text('Se alla kontor');
}
});



    
        //lista med kontoren som black eagle games har. tar ut med getjson kod
    $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',function (data) { /* Hämtar all information om kontoren 
        genom ett JSON anrop till http://ofcourse.oru.se/~IK2009/json/get_office.php*/ 
        if (data.status == 1) { // Lyckades att hämta
            for (var prop in data.result) { // itererar över "properties" av data.result
               if( data.result.hasOwnProperty( prop ) ) // prop blir till property namet av den nuvarande resilt.name
               { 
                  $('#output').append( // Lägger in innehåll i #output
                         'Land: ' + data.result[prop].name + // ger ut namnet på staden 
                         'Address: ' + data.result[prop].address + // ger ut adress på staden 
                         'Phone: ' + data.result[prop].phone +'<br />' // ger ut telenr på staden 
                  )
               }
            }
        }

        else { // Misslyckades att hämta full listan
           alert("misslykades att hämta kontoren"); //felmeddelande

        };
    });

    //om man clickar på svergie på kartan med id norden så kommer man hit
   $(".Svergie").on("click", function (e) {
            e.preventDefault(); // prevent default function av klicket
            
            $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php', { city: 'orebro' }, function (data) { /*Hämtar information om kontoret som ligger i orebro*/

            //här tar man ut informationen från den länken man fått genom upgiften och med getjson anrop
            //och kollar statusen om den är 1 annars varnar den att man inte kom åt filen.
            //informationen man tar ut är om just det kontroet man vill ha. Med namn telefon nummer och adress
            //och stoppar in det i en divtag som nu heter mapAnswer

                if (data.status == 1) { // Lyckades att hämta enskilt kontor
                    $('#mapAnswer').empty().append( // Tömmer och lägger in innehåll i #mapAnswer
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' 
                    )
            }

            else { // Misslyckades att hämta enskilt kontor
                alert("misslykades att hämta kontor");
            };
        });
    });

    $(".Svergie").on("click", function (e) {
            e.preventDefault();  // prevent default function av klicket
            
    $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'goteborg'},function (data) { /*Hämtar information om kontoret som ligger i goteborg*/

            if (data.status == 1) { // Lyckades att hämta enskilt kontor
                    $('#mapAnswer').append( // Lägger in innehåll i #mapAnswer
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' // ger namnet på staden, adressen och telenr 
                        )
            }

            else { // Misslyckades att hämta enskilt kontor
                alert("misslykades att hämta kontor");
            };
        });
    });

    $(".Toronto").on("click", function (e) {
        e.preventDefault();  // prevent default function av klicket
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'toronto'},function (data) { /*Hämtar information om kontoret som ligger i toronto*/

            if (data.status == 1) { // Lyckades att hämta enskilt kontor

                    $('#mapAnswer').empty().append( // Tömmer och lägger in innehåll i #mapAnswer
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>'  // ger namnet på staden, adressen och telenr 
                    )
            }

            else { // Misslyckades att hämta enskilt kontor
                alert("misslykades att hämta kontor");
            };
        });
    });

    $(".Snoqualmie").on("click", function (e) {
        e.preventDefault();  // prevent default function av klicket
       
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'snoqualmie'},function (data) { /*Hämtar information om kontoret som ligger i snoqualmie*/

            if (data.status == 1) { // Lyckades att hämta enskilt kontor

                    $('#mapAnswer').empty().append( // Tömmer och lägger in innehåll i #mapAnswer
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>'   // ger namnet på staden, adressen och telenr 
                    )
            }

            else { // Misslyckades att hämta enskilt kontor
                alert("misslykades att hämta kontor");
            };
        });
    });

    $(".Sheffield").on("click", function (e) {
        e.preventDefault();  // prevent default function av klicket
        
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'sheffield'},function (data) { /*Hämtar information om kontoret som ligger i sheffield*/

            if (data.status == 1) { // Lyckades att hämta enskilt kontor
                    $('#mapAnswer').empty().append( // Tömmer och lägger in innehåll i #mapAnswer
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>'   // ger namnet på staden, adressen och telenr 
                    )
            }
            else { // Misslyckades att hämta enskilt kontor
                alert("misslykades att hämta kontor");
            };
        });
    });


   
});
