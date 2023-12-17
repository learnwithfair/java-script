var vowelCount=0,consonantcount=0,totalcount=0;
var text = document.querySelector("#textjs");
var vowelDemo = document.querySelector(".voweljs");
var consonantDemo = document.querySelector(".consonantjs");
var totalDemo = document.querySelector(".totaljs");
text.addEventListener("keypress",function(event){
    var KeyDemo1 = (event.key);
    var KeyDemo = KeyDemo1.toLowerCase();
    display(KeyDemo);
})
function display(KeyDemo){
   if(KeyDemo=='a'||KeyDemo=='e'||KeyDemo=='i'||KeyDemo=='o'||KeyDemo=='u'){
       vowelCount++;
       totalcount++;
       vowelDemo.innerHTML="You have clicked Vowel : "+vowelCount;
   } 
   else if(KeyDemo>='a'&&KeyDemo<='z')
   {
    consonantcount++;
    totalcount++;
    consonantDemo.innerHTML="You have clicked Consonant : "+consonantcount;
   }
  
   totalDemo.innerHTML="You have clicked Total Key : "+totalcount;
}