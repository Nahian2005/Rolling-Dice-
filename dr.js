var img=["img/2.png", "img/4.png","img/4.png","img/5.png", "img/6.png", "img/1.png"]
var imgTag = document.getElementById("dr");

var count= 0;


function sr(){

count++;
    var num= Math.floor(Math.random()*img.length);

    if(count>=num){

        count=0;

        imgTag.src=img[num]



    }

    else{

        imgTag.src=img[num];
    }




}
