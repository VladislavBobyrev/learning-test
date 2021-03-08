const counter = document.querySelector('.counter')


let num =parseInt(counter.innerHTML) || 0;

const funcMin = () => counter.innerHTML = --num;
const funcPlus = () => counter.innerHTML = ++num;

document.querySelector('.minus').addEventListener('click', funcMin)
document.querySelector('.plus').addEventListener('click', funcPlus)


