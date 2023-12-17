var homeValue = document.getElementById("home").innerText;
var tutorialValue = document.getElementsByClassName("tutorialCls")[0].innerText;
var aboutValue = document.querySelectorAll("ul li a")[1].innerText;
var bangladeshValue = document.getElementsByTagName("span")[0].innerText;
var contactValue = document.querySelector(".contactCls").innerText;
var htmlValue = document.querySelector("#htmlid").innerText;
var cssValue = document.querySelector("div span").innerText;
function homeMessage(){
    alert("This Is "+homeValue+" Demo");
}
function tutorialMessage(){
    alert("This Is "+tutorialValue+" Demo");
}
function aboutMessage(){
    alert("This Is "+aboutValue+" Demo");
}
function bangladeshMessage(){
    alert("This Is "+bangladeshValue+" Demo");
}
function contactMessage(){
    alert("This Is "+contactValue+" Demo");
}
function htmlMessage(){
    alert("This Is "+htmlValue+" Demo");
}
function cssMessage(){
    alert("This Is "+cssValue+" Demo");
}