 $(document).ready(function(){
 
    $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',function (data) {
        if (data.status == 1) { // Lyckades att h�mta
        // kommer hit.      
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


   $(".Svergie").on("click", function (e) {
            e.preventDefault();
            
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'orebro'},function (data) {

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
