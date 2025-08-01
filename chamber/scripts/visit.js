const msToDays = 86400000;
let greeting = document.querySelector("#greeting");

let lastVisit = localStorage.getItem("lastVisit");

if(!lastVisit){
greeting.textContent = `Welcome! Let us know if you have any questions.`
}
else{
    let gap = (lastVisit - Date.now()) / msToDays;
    if(gap <= 1){
    greeting.textContent = `Back so soon? Awesome!`
    }
    else{
    greeting.textContent = `Your last visit was ${gap.toFixed(0)} days ago.`
    }
}

let visit = Date.now();
localStorage.setItem("lastVisit", visit);