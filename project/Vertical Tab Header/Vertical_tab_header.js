let tabHeader = document.getElementsByClassName("vertical-tab-header")[0];
let tabBody = document.getElementsByClassName("vertical-tab-body")[0];
let tabspans = tabHeader.getElementsByTagName("span");
let tabBodyItem = tabBody.getElementsByTagName("section");


for(let i=0; i<tabspans.length; i=i+1){
    tabspans[i].addEventListener("click",function(){
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabspans[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBodyItem[i].classList.add("active");
        
    });

}