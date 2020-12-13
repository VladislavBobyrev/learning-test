const selectElem = document.querySelector('select');

const example = document.querySelector('#example-element');

selectElem.addEventListener( 'change' , () => {
    if (selectElem.value === 'Choose a function')  {
       return 
    } else {
        example.style.transform = `rotate3d(1, 1, 1, 30deg) ${selectElem.value} ` ;
        setTimeout (function () {
            example.style.transform = `rotate3d(1, 1, 1, 30deg)` ;
        } , 2000) 
    }
})
