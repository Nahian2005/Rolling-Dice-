

var img=["img/2.png", "img/3.png", "img/4.png","img/5.png","img/6.png"]
var imgTag = document.getElementById("dr");
var count=0;

function sr(){
    count++;
   
if(count>=img.length){
    count=0;
    

  imgTag.src=img[count];  


}
else{
    imgTag.src=img[count];
}





}
