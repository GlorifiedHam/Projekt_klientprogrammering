$(document).ready(function() {
        //lista med kontoren som black eagle games har. tar ut med getjson kod
    $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',function (data) {
        if (data.status == 1) { // Lyckades att hämta
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

        else { // Misslyckades att hämta full listan
             //felmeddelande
            $('#output').text(data.message);
        };
    });

    //om man clickar på svergie på kartan med id norden så kommer man hit
   $(".Svergie").on("click", function (e) {
            e.preventDefault();
            
            $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php', { city: 'orebro' }, function (data) {

            //här tar man ut informationen från den länken man fått genom upgiften och med getjson anrop
            //och kollar statusen om den är 1 annars varnar den att man inte kom åt filen.
            //informationen man tar ut är om just det kontroet man vill ha. Med namn telefon nummer och adress
            //och stoppar in det i en divtag som nu heter mapAnswer

                if (data.status == 1) { // Lyckades att hämta enskilt kontor
                    $('#mapAnswer').append(
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' 
                    )
            }

            else { // Misslyckades att hämta enskilt kontor
                alert("misslykades att hämta kontor");
            };
        });
    });

    $(".Svergie").on("click", function (e) {
            e.preventDefault();
            
    $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'goteborg'},function (data) {

            if (data.status == 1) { // Lyckades att hämta enskilt kontor
                    $('#mapAnswer').append(
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' 
                        )
            }

            else { // Misslyckades att hämta enskilt kontor
                alert("misslykades att hämta kontor");
            };
        });
    });

    $(".Toronto").on("click", function (e) {
        e.preventDefault();
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'toronto'},function (data) {

            if (data.status == 1) { // Lyckades att hämta enskilt kontor

                    $('#mapAnswer').append(
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' 
                    )
            }

            else { // Misslyckades att hämta enskilt kontor
                alert("misslykades att hämta kontor");
            };
        });
    });

    $(".Snoqualmie").on("click", function (e) {
        e.preventDefault();
       
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'snoqualmie'},function (data) {

            if (data.status == 1) { // Lyckades att hämta enskilt kontor

                    $('#mapAnswer').append(
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' 
                    )
            }

            else { // Misslyckades att hämta enskilt kontor
                alert("misslykades att hämta kontor");
            };
        });
    });

    $(".Sheffield").on("click", function (e) {
        e.preventDefault();
        
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'sheffield'},function (data) {

            if (data.status == 1) { // Lyckades att hämta enskilt kontor
                    $('#mapAnswer').append(
                        'Stad: ' + data.result.name + ' Address: ' +data.result.address +' Phone: ' +data.result.phone +'</br>' 
                    )
            }
            else { // Misslyckades att hämta enskilt kontor
                alert("misslykades att hämta kontor");
            };
        });
    });
 });
