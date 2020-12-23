 //while
 let f = 0;

 while (f < 3) {
     console.log( f );
     f++;
 }


 let i = 4;

 while (i) {
     alert(i);
     ++i;
 }


 do {
    alert(i);
     i++;
 } while (i > 3) {
    
 }


 for (let i = 0; i < 3; i++) {
     alert(i++);
    
 }



// for (let a = 0; a < 3; a++) {
     alert(a);
    
 }

 // вечно будет выполняться тк цикл можно писать без условий for (;;) {}
   
 let sum = 0;

 while (true) {
     let value = +prompt('Введите число');
     if( !value) break;

     sum += value;

 } alert('Сумма :' + sum);


for (let a = 0; a < 10; a++) {
   if ( a % 2 ) {
    alert(a)  ; 
    }
   
}