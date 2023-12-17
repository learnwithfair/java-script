var value = document.querySelector("h1");
function addbtn(){
    
   value.style.color="blue";
   value.style.fontSize="3rem";
   value.style.fontStyle="italic";
}
function removebtn()
{
    value.style.removeProperty("color");
}