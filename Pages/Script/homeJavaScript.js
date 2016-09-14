


var imgArray=["Bilder/covers.png", "Bilder/kontor-3.png" , "Bilder/kontor-2.png"];


function displayImage(){

var num= Math.floor(Math.random()* 3); 
document.canvas.src=imgArray[num];


}