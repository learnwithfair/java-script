var count=0;
for(var i=0; i<3; i++){
    var value = document.querySelectorAll(".btnjs")[i];
    value.addEventListener("click",function(){
        var songName = this.innerHTML;
        audioPlay(songName);
    });
}
function audioPlay(songName)
{
    var audioText = document.querySelector("."+songName);
    
    var audio = new Audio("Song/"+songName+".mp3");
    count++;
    if(count>=2){
        
        count=0;
        audioText.classList.remove("animationdemo");
    }else{
        audio.play();
        audioText.classList.add("animationdemo");
    }
}