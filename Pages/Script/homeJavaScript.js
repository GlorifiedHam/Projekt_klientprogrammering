


var imgArray = ["Bilder/kontor-1.png", "Bilder/kontor-3.png" , "Bilder/kontor-2.png"];
       loopImgArray();
       var interval = setInterval(loopImgArray,15000);
            

       function loopImgArray(){
        for(var i = 0; i < imgArray.length;  i++){
        	(function(i){
 setTimeout(function(){
           document.canvas.src=imgArray[i];
},i*4000);
   })(i);

        }	
        	
        }
       
