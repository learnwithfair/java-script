for(var i =0; i<3 ;i++)
{
    var value = document.querySelectorAll(".btnJS")[i];

    value.addEventListener("click",function(){
    var heddingValue = document.querySelector(".heddingJS");
    
     heddingValue.innerHTML="You have clicked "+this.innerHTML;
   
})
}