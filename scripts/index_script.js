// ################################################################
// --------------------side nav-----------------------------
// #############################################################


const mobileHamburger=document.querySelector('.mobileHamburger');
const mobileDropDown=document.querySelector('.mobileDropDown');
const mobileDropDownCross=document.querySelector('.mobileDropDownCross');


mobileHamburger.addEventListener('click',()=>{
    mobileDropDown.style="right:0";
})

mobileDropDownCross.addEventListener('click',()=>{
    mobileDropDown.style="right:-40rem";
   
})

// #################################################################
// ----------------Contact US Modal-----------------------------
// #############################################################
function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

// const contactUsBtn=document.getElementsByClassName('contactUsBtn')[0];
const contactUsBtn1=document.getElementsByClassName('contactUsBtn')[0];
const contactUsBtn2=document.getElementsByClassName('contactUsBtn')[1];

const contactModalDiv=document.getElementsByClassName('contactModalDiv')[0]
const contactModalCross=document.querySelector(".contactModal img");
const contactModal=document.querySelector('.contactModal');

// -----------------Click outside to exit modal----------------

window.onclick = function(event) {
    if (event.target == contactModalDiv) {
        console.log("asasasasasa");
 
        contactModalDiv.style="opacity: 0;visibility: hidden;";
        contactModal.style="top:-999px";
        enableScrolling();
    
     }
 
 }



function close_contact_popup()
{
     
            contactModalDiv.style="opacity: 0;visibility: hidden;";
            contactModal.style="top:-999px";
            enableScrolling();
        
    
}


// ---------Opening modal-------------

contactUsBtn1.addEventListener('click',()=>{
    contactModalDiv.style="opacity: 1;visibility: visible;";
    contactModal.style="top:0px";
    disableScrolling();
});
contactUsBtn2.addEventListener('click',()=>{
    contactModalDiv.style="opacity: 1;visibility: visible;";
    contactModal.style="top:0px";
    disableScrolling();
});


// ------------Hiding the modal---------
contactModalCross.addEventListener('click',()=>{
    contactModalDiv.style="opacity: 0;visibility: hidden;";
    contactModal.style="top:-999px";
    enableScrolling();
});
function NewTab() { 
    window.open( 
      "https://s3.ap-south-1.amazonaws.com/www.northerncolumbia.in/KIRITI_BROCHURE.pdf");
}

// #################################################################
// ------------------------Hero Section slider----------------------
// #################################################################

// const companyName=document.querySelector('.companyname');
// const heroBg=document.querySelector('.herobg');
// // Update images in this array
// // const arr=['herobg1.jpg','herobg2.jpg','herobg3.jpg','herobg4.jpg'];
// const arr=['herobg1.jpg','herobg1.jpg','herobg1.jpg','herobg1.jpg'];
// let i=0;
// window.setInterval(()=>{
//     if(i===arr.length)
//         i=0;
//     heroBg.style.backgroundImage=`linear-gradient(90deg, rgba(0,0,0,.85) 50%, rgba(255, 255, 255, 0.5) 100%),url("./imgs/${arr[i]}")`
//     i++;
// },4000);

// ------------------------Features------------------------
// --------------------------------------------------------
const card=document.querySelectorAll('.card');
let bgImgs=[];
for(let j=0;j<card.length;j++){
    bgImgs[j]=card[j].getAttribute('bgImg')
}

window.addEventListener('load', (event) => {
    for(let k=0;k<card.length;k++){
        card[k].style.backgroundImage="linear-gradient(0deg, rgba(0,0,0,1) 19%, rgba(0, 0, 0, 0.1) 100%),url('./imgs/features/"+bgImgs[k]+"')"
    }
  });



// <================== submit form to formspark ============>



function submit_form1(){

    message= document.getElementById("message1").value,
     email= document.getElementById("email1").value,
     phone= document.getElementById("phone1").value,
     name= document.getElementById("name1").value
     document.getElementById("error1").innerHTML="";
     if(name == '' || !(/^[a-zA-Z]+$/.test(name)))
     {
        document.getElementById("error1").innerHTML="Please enter valid Name.";
        return
     }
     else if(phone == '' || !(phone.match(/\D/) == null))
     {
        document.getElementById("error1").innerHTML="Please enter valid Phone.";
        return
     }

     document.getElementById("loading1").innerHTML="Loading......";

    fetch("https://submit-form.com/mfv3uasO", {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     Accept: "application/json",
   },
   body: JSON.stringify({
     message: document.getElementById("message1").value,
     email: document.getElementById("email1").value,
     phone: document.getElementById("phone1").value,
     name: document.getElementById("name1").value
   }),
 })
   .then(function (response) {
     console.log(response);
   })
   .catch(function (error) {
     console.error(error);
   });

   close_contact_popup();
   //open and download brochure
 window.open( 
    "https://s3.ap-south-1.amazonaws.com/www.northerncolumbia.in/KIRITI_BROCHURE.pdf");

}



   function submit_form2(){
    message= document.getElementById("message2").value,
    email= document.getElementById("email2").value,
    phone= document.getElementById("phone2").value,
    name= document.getElementById("name2").value
    document.getElementById("error2").innerHTML="";
    if(name == '' || !(/^[a-zA-Z]+$/.test(name)))
    {
       document.getElementById("error2").innerHTML="Please enter valid Name.";
       return
    }
    else if(phone == '' || !(phone.match(/\D/) == null))
    {
       document.getElementById("error2").innerHTML="Please enter valid Phone.";
       return
    }

       const xhr = new XMLHttpRequest();
 xhr.open("POST", "https://submit-form.com/your-form-id");
 xhr.setRequestHeader("Content-Type", "application/json");
 xhr.setRequestHeader("Accept", "application/json");
 xhr.send(
   JSON.stringify({
     message: document.getElementById("message2").value,
     email: document.getElementById("email2").value,
     phone: document.getElementById("phone2").value,
     name: document.getElementById("name2").value
   })
 );
 document.getElementById("message2").value="";
 document.getElementById("email2").value="";
 document.getElementById("phone2").value="";
 document.getElementById("name2").value="";

//open and download brochure
 window.open( 
    "https://s3.ap-south-1.amazonaws.com/www.northerncolumbia.in/KIRITI_BROCHURE.pdf");

}

 
