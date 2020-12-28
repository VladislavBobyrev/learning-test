 //===== Стрелочные функции

 let func = (a, b) => a + b;
 console.log(func(5,6))


 let strFkunk = (a, b) => a * b;
 let age = prompt('let?')
 
 let welcime = (age < 18) ?
     () => console.log('hello') :
     () => console.log('Hello eorld')
    
     welcime()  

    let str = (a, b) => {
        let rezult = a * b;
        return rezult;
    }

    console.log(str(5, 10));
 //======  DZ =======
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
      }

      ask(
          'Принимаете наши условия?',
          () => alert('Вы согласились'),
          () => alert('Вы не согласились')
      )