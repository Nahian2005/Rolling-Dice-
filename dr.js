

function mydice(){

   

 img= new Array() ;

img[0]= "img/1.png";
img[1]= "img/2.png";
img[2]= "img/3.png";
img[3]= "img/4.png";
img[4]= "img/5.png";
img[5]= "img/6.png";

var num= Math.floor(Math.random()*img.length);
return document.getElementById("result").innerHTML = '<img src="'+img[num]+'" />'; 


}