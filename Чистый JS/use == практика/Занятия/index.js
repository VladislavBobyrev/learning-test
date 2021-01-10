// =================   header
let btn = document.querySelector('.btn')
let res = document.querySelector('.res')

let task  = () => {
   res.innerHTML = ''

    for( let i = 7; i <= 20; i++) {
    res.innerHTML += i + '<br>'  
    
    }

}

btn.addEventListener('click', task)

// ==================    Section

let btn2 = document.querySelector('.btn2')
let startNum = document.querySelector('.startNum')
let endNum = document.querySelector('.endNum')
let res2 = document.querySelector('.res2')

let task2 = ()  => {
    res2.innerHTML  = ''

    for (let i = parseInt(startNum.value) ; i <=parseInt(endNum.value) ; i++){
        res2.innerHTML += i  + '<br>'
   
    }
}

btn2.addEventListener('click', task2 )

// ==================    Section

let btn3 = document.querySelector('.btn3')
let res3 = document.querySelector('.res3')
let clearScreen = () => res3.innerHTML = ''

let task3  = () => {    
    clearScreen()
    for (let i = -5; i < 5; i++ ) {

        if (i == 0) continue
        res3.innerHTML += i + '<br>  '      
    }
        
     
}

btn3.addEventListener('click', task3)

// ==================    Section

let btn4 = document.querySelector('.btn4')
let res4 = document.querySelector('.res4')
let clearScreen4 =  () => res4.innerHTML = ''

let task4 = () => {
    clearScreen4()
    
    for (let i = 20; i > 7 ;  i--) {
        
        res4.innerHTML += i + '\n'
    }
}

btn4.addEventListener('click', task4)

// ==================    Section

let btn5 = document.querySelector('.btn5')
let res5 = document.querySelector('.res5')
let zvezds = '***'

let clearScreen5 = () => res5.innerHTML = ''

let task5 = () =>  {
        clearScreen5()
    let res = ''

for (let i = 0; i <= 30; i++) {
      res += i
      res += zvezds + '<br>'
     
    } 
    res5.innerHTML = res
   
}

btn5.addEventListener('click', task5)






// ==================    Section

let btn6 = document.querySelector('.btn6')
let res6 = document.querySelector('.res6')

let clearScreen6 = () => res6.innerHTML = ''
let res = '' 
let zvezda = ''

let task6 = () => {
    clearScreen6()
   

    for(let i = 0; i < 30 ; i++) {          
        let randomNum = Math.floor(Math.random() * 10 )
         zvezda = ''   
        for ( j = 0; j <= randomNum; j++) {
           
            zvezda += '*'
                      
        }      
        res += zvezda  + '<br>'
        res6.innerHTML = res 
        
    }
   
}

btn6.addEventListener('click', task6)
// ==================    Section

let btn7 = document.querySelector('.btn7')
let res7 = document.querySelector('.res7')

let clearScreen7 = () => res7.innerHTML = ''

let task7 = () => {
    clearScreen7()
    let randomNum = Math.floor(Math.random() * 10) + 1
        if ((randomNum % 2 == 0) || (randomNum % 3 == 0)) {
            res7.innerHTML = randomNum
        }  else {
            res7.innerHTML = `Не делиться не 3 и 2, число ${randomNum}`
        }  
}
btn7.addEventListener('click', task7)

// ==================    Section

let btn8 = document.querySelector('.btn8')
let res8 = document.querySelector('.res8')

let clearScreen8 = () => res8.innerHTML = ''


let task8 = () => { 
    let  randomNum  = '' 
    let i = 0
        while (i <= 15) {
           
            do { 
                randomNum = (Math.random * 100) + 1
            }  while ((randomNum % 2 == 0 ) || (randomNum % 3 == 0)) {
                res8.innerHTML = randomNum
            }
             i++
    }
        
}
btn8.addEventListener('click', task8 )
