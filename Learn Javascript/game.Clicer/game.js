let name = '';
let number = Math.ceil(Math.random() * 100);
let guesses = 0 ;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

prompt.addEventListener('submit', handleSubmit);

printMessage('Введите имя игрока :');

input.focus();

function handleSubmit(event) {
    event.preventDefault();

    processInput(input.value);

    input.value = '';
}

function printMessage(message) {
    let li= document.createElement('li');

    li.textContent = message;

    output.appendChild(li);
}

function clearOutput () {
    for(let i = 0; i < output.children.length; i++){
    output.removeChild(output.children[i]);
}
}

function processInput(input) {
    if(!input) return;

    if(!name) {
        name = input;
        clearOutput();
        printMessage(`${name}, загадано число от 0 до 100, попробуй отгадать его за наименьшее количество попыток!!!`);
        return;
    }

    printMessage(input);

    let guess =Number.parseInt(input);

    if (Number.isNaN(guess)) return;

    guesses += 1;

    if (guess > number) {
        printMessage('много поробуй еще');
    } else if (guess < number) {
        printMessage('мало попробуй еще');
    } else{
        printMessage(`верно , это число ${guess}.`);
        printMessage(` тебе понадобилось${guesses} попыток.`);
        printMessage(`GAME OVER ${name}.`);

       prompt.remove();
    }
}