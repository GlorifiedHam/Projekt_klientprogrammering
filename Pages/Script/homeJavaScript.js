var imgArray = ["Bilder/kontor-1.png", "Bilder/kontor-3.png" , "Bilder/kontor-2.png"];
var interval = setInterval(loopImgArray, 15000); //startar om loopen n�r den �r slut

loopImgArray(); //startar bildspelet p� inmatning av javascript
        
function loopImgArray() {
    //javascripten f�r bildspelet. vi anv�nde javascript och INTE jqerry
    for (var i = 0; i < imgArray.length; i++) {

        (function (i) {
            setTimeout(function(){
                 document.canvas.src=imgArray[i];
            }, i * 4000);
        })(i); //end of the timeout loop
     }	

}// slutet p� bildspelets function
       
