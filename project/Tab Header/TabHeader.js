let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
let tabsPane = tabHeader.getElementsByTagName("div");
let tabsImage = tabHeader.getElementsByTagName("span");
// let rotateImage = tabHeader.getElementsByTagName("img");
// let tabIndicator = tabHeader.getElementsByTagName("i");
let tabContent = tabBody.getElementsByTagName("section");

for(let i = 0; i<tabsPane.length; i++){
    tabsPane[i].addEventListener("click",function(){
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabHeader.getElementsByClassName("iconBG")[0].classList.remove("iconBG");
        tabsPane[i].classList.add("active");
        tabsImage[i].classList.add("iconBG");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabContent[i].classList.add("active");
    });
}
 
      