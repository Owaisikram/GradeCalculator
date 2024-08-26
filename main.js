const form = document.getElementById("gradeForm") // form get kiya 
const resultbar = document.getElementById("result") // result get kiya


form.addEventListener("submit",(event)=>{
    event.preventDefault()

 const numInput = parseInt (document.getElementById("enterNum").value) // first numnber wala input
 const totalNumInput = parseInt (document.getElementById("enterTotalNum").value) // second number wala input
    

const data = (numInput/totalNumInput) * 100; 
const roundedData = Math.round(data);
let show;


 if (roundedData >=80) {
     show ="Excellent you got A1 Grade 🤩";
 }

 else if(roundedData >=70 ) {
     show ="Excellent you got A Grade 🤗";
 }

 else if(roundedData >=60) {
     show ="Good you got B Grade 🙂";
 }

 else if(roundedData >=50) {
     show ="Have to work on skills you got C Grade 🙁";
 }

else if(roundedData >=40) {
     show ="Have to work hard you got D Grade 🥺";
 }
 else{
     show ="You are Fail 😨 ";
 }

 resultbar.innerHTML = `Your percentage is: ${roundedData}%<br>${show}`;

});
