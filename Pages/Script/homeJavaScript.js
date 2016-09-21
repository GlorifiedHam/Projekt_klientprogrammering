var imgArray = ["Bilder/kontor-1.png", "Bilder/kontor-3.png" , "Bilder/kontor-2.png"];
var interval = setInterval(loopImgArray, 15000); //startar om loopen när den är slut

loopImgArray(); //startar bildspelet på inmatning av javascript
//4s mellan bilderna och 15 för hela bildspelet. 3 bilder sammanlagt.
        
function loopImgArray() {
    //javascripten för bildspelet. vi använde javascript och INTE jqerry
    for (var i = 0; i < imgArray.length; i++) {

        (function (i) {
            setTimeout(function(){
                 document.canvas.src=imgArray[i];
            }, i * 4000);
        })(i); //end of the timeout loop
     }	

}// slutet på bildspelets function
       
