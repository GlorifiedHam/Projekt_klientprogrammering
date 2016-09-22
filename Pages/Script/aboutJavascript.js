$(document).ready(function() {
     $('.map1').maphilight(); // Ger r�d border samt m�rkbakgrund f�r v�ra klick bara zoner i v�r bild karta



var $kontorDiv = $("#output"); // Skapar en variabel f�r #output
$kontorDiv.hide(); // G�mmer div:en #output
$('a.kontor').click(function(event){ // funktion f�r vad som h�nder om man klickar p� l�nken kontor
event.preventDefault();// prevent default function av a.kontor
if($kontorDiv.is(':hidden')){ /* Om kontor diven �r inte g�mt kommer infromationen att fada in sakata om man klickar p� knappen, annars kommer 
    den att fada ut om man klickar p� knappen*/
$kontorDiv.fadeIn('slow');
$(this).text('Se mindre');
}else{
$kontorDiv.fadeOut('slow');
$(this).text('Se alla kontor');
}
});



    
        //lista med kontoren som black eagle games har. tar ut med getjson kod
    $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',function (data) { /* H�mtar all information om kontoren 
        genom ett JSON anrop till http://ofcourse.oru.se/~IK2009/json/get_office.php*/ 
        if (data.status == 1) { // Lyckades att h�mta
            for (var prop in data.result) { // itererar �ver "properties" av data.result
               if( data.result.hasOwnProperty( prop ) ) // prop blir till property namet av den nuvarande resilt.name
               { 
                  $('#output').append( // L�gger in inneh�ll i #output
                         'Land: ' + data.result[prop].name + // ger ut namnet p� staden 
                         'Address: ' + data.result[prop].address + // ger ut adress p� staden 
                         'Phone: ' + data.result[prop].phone +'<br />' // ger ut telenr p� staden 
                  )
               }
            }
        }

        else { // Misslyckades att h�mta full listan
           alert("misslykades att h�mta kontoren"); //felmeddelande

        };
    });

    //om man clickar p� svergie p� kartan med id norden s� kommer man hit
   $(".Svergie").on("click", function (e) {
            e.preventDefault(); // prevent default function av klicket
            
            $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php', { city: 'orebro' }, function (data) { /*H�mtar information om kontoret som ligger i orebro*/

            //h�r tar man ut informationen fr�n den l�nken man f�tt genom upgiften och med getjson anrop
            //och kollar statusen om den �r 1 annars varnar den att man inte kom �t filen.
            //informationen man tar ut �r om just det kontroet man vill ha. Med namn telefon nummer och adress
            //och stoppar in det i en divtag som nu heter mapAnswer

                if (data.status == 1) { // Lyckades att h�mta enskilt kontor
                    $('#mapAnswer').empty().append( // T�mmer och l�gger in inneh�ll i #mapAnswer
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' 
                    )
            }

            else { // Misslyckades att h�mta enskilt kontor
                alert("misslykades att h�mta kontor");
            };
        });
    });

    $(".Svergie").on("click", function (e) {
            e.preventDefault();  // prevent default function av klicket
            
    $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'goteborg'},function (data) { /*H�mtar information om kontoret som ligger i goteborg*/

            if (data.status == 1) { // Lyckades att h�mta enskilt kontor
                    $('#mapAnswer').append( // L�gger in inneh�ll i #mapAnswer
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' // ger namnet p� staden, adressen och telenr 
                        )
            }

            else { // Misslyckades att h�mta enskilt kontor
                alert("misslykades att h�mta kontor");
            };
        });
    });

    $(".Toronto").on("click", function (e) {
        e.preventDefault();  // prevent default function av klicket
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'toronto'},function (data) { /*H�mtar information om kontoret som ligger i toronto*/

            if (data.status == 1) { // Lyckades att h�mta enskilt kontor

                    $('#mapAnswer').empty().append( // T�mmer och l�gger in inneh�ll i #mapAnswer
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>'  // ger namnet p� staden, adressen och telenr 
                    )
            }

            else { // Misslyckades att h�mta enskilt kontor
                alert("misslykades att h�mta kontor");
            };
        });
    });

    $(".Snoqualmie").on("click", function (e) {
        e.preventDefault();  // prevent default function av klicket
       
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'snoqualmie'},function (data) { /*H�mtar information om kontoret som ligger i snoqualmie*/

            if (data.status == 1) { // Lyckades att h�mta enskilt kontor

                    $('#mapAnswer').empty().append( // T�mmer och l�gger in inneh�ll i #mapAnswer
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>'   // ger namnet p� staden, adressen och telenr 
                    )
            }

            else { // Misslyckades att h�mta enskilt kontor
                alert("misslykades att h�mta kontor");
            };
        });
    });

    $(".Sheffield").on("click", function (e) {
        e.preventDefault();  // prevent default function av klicket
        
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'sheffield'},function (data) { /*H�mtar information om kontoret som ligger i sheffield*/

            if (data.status == 1) { // Lyckades att h�mta enskilt kontor
                    $('#mapAnswer').empty().append( // T�mmer och l�gger in inneh�ll i #mapAnswer
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>'   // ger namnet p� staden, adressen och telenr 
                    )
            }
            else { // Misslyckades att h�mta enskilt kontor
                alert("misslykades att h�mta kontor");
            };
        });
    });


   
});
