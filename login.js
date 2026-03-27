alert("welcome");
let form=document.querySelector("form");
let name=document.querySelector("#name");
let email=document.querySelector("#email");
let mobile=document.querySelector("#mobile");
let submit=document.querySelector("#submit");
// real time validation for mobile number
mobile.addEventListener("input", () => { if (mobile.value.length == 10) { mobile.style.boxShadow = "none"; mobile.style.border = "1px solid rgba(0,0,0,0.4)"; } }); 

// event handling part
form.addEventListener("submit",(event)=>{
    event.preventDefault();
   
        // name input section
        if(name.value==""){
            name.style.boxShadow="0 0 2px red";
            name.style.border="none";
        }
        else{
            name.style.boxShadow="none";
            name.style.border="1px solid rgba(0,0,0,0.4)";
        }
        //email input part
        if(email.value==""){
            email.style.boxShadow="0 0 2px red";
            email.style.border="none";
        }
        else{
            email.style.boxShadow="none";
            email.style.border="1px solid rgba(0,0,0,0.4)";
            }
        //mobile number input section
        if(mobile.value.length!=10){
            mobile.style.boxShadow="0 0 2px red";
            mobile.style.border="none";
        }
        else{
            mobile.style.boxShadow="none";
            mobile.style.border="1px solid rgba(0,0,0,0.4)";
        }
        //submit section
        if(name.value!=""&& email.value!=""&& mobile.value.length==10){
            alert("submitted sucessfully");
            submit.value="submitted";
            submit.style.backgroundColor="green";
        }
});