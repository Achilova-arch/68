const btn = document.getElementById("btn");
const input = document.getElementById("input");
const fromImg = document.getElementById("from-img");
const toImg = document.getElementById("to-img");
const fromSelect = document.getElementById("from-select");
const toSelect = document.getElementById("to-select");
const result = document.getElementById("result");

let api = `https://currency-converter-pro1.p.rapidapi.com/convert`;

const url =
  "https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3a85454212mshfe09c9b1b69ab49p1aa3e3jsn784737adc563",
    "x-rapidapi-host": "currency-converter-pro1.p.rapidapi.com",
  },
};



 async function getData(){
 const res= await  fetch(url,options);
 const data=await res.json();
 console.log(data);
 for (const key in data.result){
  const opt=document.createElement("option");
  opt.textContent=key;
  opt.value=key;
  fromSelect.appendChild(opt);
 }
 for (const key in data.result){
  const opt=document.createElement("option");
  opt.textContent=key;
  opt.value=key;
  toSelect.appendChild(opt);
 }
}
getData();
fromSelect.addEventListener("change", ()=>{
  fromImg.src =`https://flagcdn.com/16x12/${fromSelect.value.toLowerCase().slice(0,2) }.png`
});
toSelect.addEventListener("change", ()=>{
  toImg.src =`https://flagcdn.com/16x12/${toSelect.value.toLowerCase().slice(0,2) }.png`
});
btn.addEventListener("click",async()=>{
  if(input.value.trim().length < 1){
    alert ("Pul miqdorini kiriting")
  }else{
    const res = await fetch(
      api +
        `?from=${fromSelect.value}&to=${toSelect.value}&amount=${input.value}`,
      options
    );
   const data = await res.json();
   console.log(data);
   result.textContent= "Result:" + data.result + " " + toSelect.value
   
  }
});