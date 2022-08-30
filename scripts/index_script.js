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
    mobileDropDown.style="right:-20rem";
   
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

const contactUsBtn=document.getElementsByClassName('contactUsBtn')[0];
const contactModalDiv=document.getElementsByClassName('contactModalDiv')[0]
const contactModalCross=document.querySelector(".contactModal img");
const contactModal=document.querySelector('.contactModal');

// -----------------Click outside to exit modal----------------

window.onclick = function(event) {
    if (event.target == contactModalDiv) {
 
        contactModalDiv.style="opacity: 0;visibility: hidden;";
        contactModal.style="top:-999px";
        enableScrolling();
    
     }
 
 }

// ---------Opening modal-------------
contactUsBtn.addEventListener('click',()=>{
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
      "https://drive.google.com/file/d/163rTEHAs_O5uPM1wCFn66G2JzUOcU-WP/view", "_blank");
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
    console.log('page is fully loaded');
    for(let k=0;k<card.length;k++){
        card[k].style.backgroundImage="linear-gradient(0deg, rgba(0,0,0,1) 19%, rgba(0, 0, 0, 0.1) 100%),url('./imgs/features/"+bgImgs[k]+"')"
    }
  });
