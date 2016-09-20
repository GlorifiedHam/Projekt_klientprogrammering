 $(document).ready(function(){
 
    $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',function (data) {
        if (data.status == 1) { // Lyckades att hämta
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

        else { // Misslyckades att hämta full listan
             //felmeddelande
            $('#output').text(data.message);
        };
    });


   $(".Svergie").on("click", function (e) {
            e.preventDefault();
            
        $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php',{city:'orebro'},function (data) {

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
