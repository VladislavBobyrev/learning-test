let clicks = 0;

const OUTTIME =5000;
const display =document.querySelector('#display');
const button =document.querySelector('#button');
const counter =document.querySelector('#counter');

button.onclick =start;

function start () {
     const startTime = Date.now();

 display.textContent =  formatTime(OUTTIME);
    button.onclick = () => counter.textContent= clicks++;
    

    const interval = setInterval(()=> {
        const delta = Date.now() - startTime;
        display.textContent = formatTime( OUTTIME - delta);
    },100);

    const timeout= setTimeout(() => {
        button.onclick = null;
       // display.textContent = ('GAME OVER')
        display.textContent= (`Поздравляю Вы набрали ${--clicks} баллов`)
   clearInterval(interval)
        clearTimeout(timeout);

    },OUTTIME);
}

function formatTime (ms) {
    return Number.parseFloat(ms/ 1000).toFixed(2)
}