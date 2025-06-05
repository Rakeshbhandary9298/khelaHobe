  
  setInterval(()=>{
let days=document.getElementById("days");
let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");


let futureDate=new Date("June 8, 2025 16:00:00").getTime();

let now=new Date().getTime();

let distance=futureDate - now;

console.log(distance);

      const dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);


      days.innerHTML=(dayss<10?"0":"") +dayss;
      hrs.innerHTML=(hours<10?"0":"") +hours;
      min.innerHTML=(minutes<10?"0":"") +minutes;
      sec.innerHTML=(seconds<10?"0":"") + seconds;

      },1000)
