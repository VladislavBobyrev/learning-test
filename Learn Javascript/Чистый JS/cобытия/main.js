// ================== Конструктор Event

//let evt = new Event('click', {
//	bubbles: true,
//	cancelable: true,
//	composed:false,
//})


// Метод dispatchEvent
//чтобы запустить наше событие на элементе


const body = document.querySelector('body')
//const fn = () => {
//	console.log('mouseDovn')
//}
//body.addEventListener('mousedown', fn)


const fnmouse = (evt) => {
	console.log(evt.clientX)
	console.log(evt.clientY)
}
body.addEventListener('mousemove', fnmouse)
// теперь у боди есть наше событие
//body.dispatchEvent(evt)

//Можно легко отличить «настоящее» событие от сгенерированного кодом.
//event.isTrusted

// специфические конструкторы
//UIEvent
//FocusEvent
//MouseEvent
//WheelEvent
//KeyboardEvent

//oncopy запрещает копирование текста
// CustomEvent = Event искл поле detailed
//elem.dispatchEvent(new CustomEvent("hello", {
//	detail: { name: "Вася" }
//}));

//click
//mousedown/mouseup
//Кнопка мыши нажата/отпущена над элементом.
//mouseover/mouseout
//Курсор мыши появляется над элементом и уходит с него.
//mousemove
//Каждое движение мыши над элементом генерирует это событие.
//contextmenu


// dblclick двойное нажатие мыши


//Свойства объекта события:

//shiftKey: Shift
//altKey: Alt (или Opt для Mac)
//ctrlKey: Ctrl
//metaKey: Cmd для Mac
