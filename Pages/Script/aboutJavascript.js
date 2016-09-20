$(document).ready(function() {
        //lista med kontoren som black eagle games har. tar ut med getjson kod
    $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',function (data) {
        if (data.status == 1) { // Lyckades att h�mta
            for (var prop in data.result) {
               if( data.result.hasOwnProperty( prop ) ) {
                  $('#output').append(
                         'Land: ' + data.result[prop].name + 
                         'Address: ' + data.result[prop].address + 
                         'Phone: ' + data.result[prop].phone +'<br />'
                  )
               }
            }
        }

        else { // Misslyckades att h�mta full listan
             //felmeddelande
            $('#output').text(data.message);
        };
    });

    //om man clickar p� svergie p� kartan med id norden s� kommer man hit
   $(".Svergie").on("click", function (e) {
            e.preventDefault();
            
            $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php', { city: 'orebro' }, function (data) {

            //h�r tar man ut informationen fr�n den l�nken man f�tt genom upgiften och med getjson anrop
            //och kollar statusen om den �r 1 annars varnar den att man inte kom �t filen.
            //informationen man tar ut �r om just det kontroet man vill ha. Med namn telefon nummer och adress
            //och stoppar in det i en divtag som nu heter mapAnswer

                if (data.status == 1) { // Lyckades att h�mta enskilt kontor
                    $('#mapAnswer').append(
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' 
                    )
            }

            else { // Misslyckades att h�mta enskilt kontor
                alert("misslykades att h�mta kontor");
            };
        });
    });

    $(".Svergie").on("click", function (e) {
            e.preventDefault();
            
    $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'goteborg'},function (data) {

            if (data.status == 1) { // Lyckades att h�mta enskilt kontor
                    $('#mapAnswer').append(
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' 
                        )
            }

            else { // Misslyckades att h�mta enskilt kontor
                alert("misslykades att h�mta kontor");
            };
        });
    });

    $(".Toronto").on("click", function (e) {
        e.preventDefault();
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'toronto'},function (data) {

            if (data.status == 1) { // Lyckades att h�mta enskilt kontor

                    $('#mapAnswer').append(
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' 
                    )
            }

            else { // Misslyckades att h�mta enskilt kontor
                alert("misslykades att h�mta kontor");
            };
        });
    });

    $(".Snoqualmie").on("click", function (e) {
        e.preventDefault();
       
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'snoqualmie'},function (data) {

            if (data.status == 1) { // Lyckades att h�mta enskilt kontor

                    $('#mapAnswer').append(
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' 
                    )
            }

            else { // Misslyckades att h�mta enskilt kontor
                alert("misslykades att h�mta kontor");
            };
        });
    });

    $(".Sheffield").on("click", function (e) {
        e.preventDefault();
        
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'sheffield'},function (data) {

            if (data.status == 1) { // Lyckades att h�mta enskilt kontor
                    $('#mapAnswer').append(
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' 
                    )
            }
            else { // Misslyckades att h�mta enskilt kontor
                alert("misslykades att h�mta kontor");
            };
        });
    });
 });
