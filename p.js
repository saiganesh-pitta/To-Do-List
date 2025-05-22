
 const inputBox=document.querySelector(".inputBox");
 const ul=document.querySelector(".u-list");
 const btn=document.querySelector(".add");

  
 btn.addEventListener("click",()=>{
             click()}    );

  function click() {
     if(inputBox.value===""){
         alert("Invalid Input");
     }else{
      let li=document.createElement("li"); 
          li.innerHTML=inputBox.value;
          ul.appendChild(li); 
      tick=document.createElement("tick");
          tick.innerHTML="&#9989"; 
           li.prepend(tick); 
      let span=document.createElement("span");
          span.innerHTML="\u00d7";
          li.appendChild(span);
       inputBox.value="";
     }
     saveData();
 };

     ul.addEventListener("click",(e)=>{
      if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
      }else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
      }  
         saveData();
   });

  
//  BUTTON SCRIPT
  
 const body=document.querySelector("body");
 const on=document.querySelector("#on");
 const off=document.querySelector("#off");
 
   off.addEventListener("click",()=>{
     document.body.classList.add("dark-mode");
     on.style.display="inline";
     off.style.display="none";
  
   });

    on.addEventListener("click",()=>{
     document.body.classList.remove("dark-mode");
     off.style.display="inline";
     on.style.display="none";
      
    }); 
 
    // saved data

    function saveData() {
        localStorage.setItem("data",ul.innerHTML);
     };
     function showTask() {
      ul.innerHTML=localStorage.getItem("data");
     };

     showTask();
