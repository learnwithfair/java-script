var imgsrc = document.querySelector("img");
var imgs= ["Images/1.jpg","Images/2.jpg","Images/3.jpg","Images/4.jpg","Images/5.jpg","Images/6.jpg"];
var count = 0;
function nextMessage()
{
    count ++;
    if(count>=imgs.length){
        count=0;
    }
    imgsrc.src=imgs[count];
}
function previousMessage()
{
    count --;
    if(count<0){
        count=imgs.length-1;
    }
    imgsrc.src=imgs[count];
    
}
