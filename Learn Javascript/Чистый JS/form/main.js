const form = document.forms.my
let elem = form.elements[1]
console.log(form)
console.log(elem)

let option = new Option('text', 'value')
form.appendChild(option)

//document.readyState – текущее состояние документа, изменения можно отследить с помощью события readystatechange:
//loading – документ грузится.
//interactive – документ прочитан, происходит примерно в то же время, что и DOMContentLoaded, но до него.
//complete – документ и ресурсы загружены, происходит примерно в то же время, что и window.onload, но до него.