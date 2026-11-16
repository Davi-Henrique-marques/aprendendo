let number = 0;
let cron;
const h1 = document.querySelector('h1');

function start() {

cron = setInterval(() => {
    number++;
    h1.innerHTML = number;
}, 1000)

}

function stop() {
    
    clearInterval(cron);

}