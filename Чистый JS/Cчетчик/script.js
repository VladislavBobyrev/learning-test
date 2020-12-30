 let btnMinus = document.querySelector('.minus' )
 let btnPlus = document.querySelector('.plus')
 let counter = document.querySelector('.counter')
 let a = 0;
 
 

 if (btnMinus) {
 let funcMin = (a) => {     
       counter.innerHTML = --a;
    }  
 }

 if(btnPlus) {
 let funcPlus = (a) => {      
      counter.innerHTML = ++a;
    } 
}

counter.innerHTML = a










