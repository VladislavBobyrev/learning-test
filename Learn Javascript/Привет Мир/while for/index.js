let num= 0;
  while   ( num <= 3) {
   
     alert(num++);
 }


 for ( let num = 0; num < 5; ++num) {     if (num == 3) {
         alert('three');
     }
     alert(num)
 }


// for (;;) {}
    
// Бесконечный цикл

let sum = 0;

while (true) {
    let value = +prompt('number ', '');

    if ( !value ) break;
    sum += value

    
}
alert('summa :' + sum);