//Обекты имеют свойства и значения
    let obj = {
            name: 'BMV',
         age: 28,
         work: 'startUp',
         "love js": 'true',
         }


        //  exercise ===================================================================
        let firstPart =  'likes';
//     Можем передать в качестве значения переменную
        let userInfo = {
            name: 'Mary',
            age: 28,
            [firstPart + 'javascript']: true, 
            
        };
        console.log(userInfo["likes + javascript"]);
        
//ecercise ==================================================================

let firstName = 'Vlad'
let persInfo = {
    name: 'Mary',
    age: 28,
    [firstName]: true,
}
let key = 'age'
// с помошью квадратных скобок можем передавать параметрам имя переменной
console.log(persInfo[key]);

// ecercise ==================================================================
// Зарезервированные именя можем передавать и указывать как свойство и не будет ошибки

let rezerv = {
    for: 'Для',
    if: 'если',
    let: 'лет',
    0: 25,
    $: 99,
    //$ становиться строкой
}
console.log(rezerv['for']);
console.log(rezerv['$']);

// ecercise ==================================================================

// Символ это уникальный идентификатор 
let id = Symbol('id ')

let secret = {
// с помошью евго мы можем скрыть свойство от фор ин
    [id]: 'Некоторое значение'
}
console.log(secret.id);

//ecercise ==================================================================

let addres = {
    name: 'vald',
    age: 25,
    address: {
        sity: 'Belgorod',
        street: 'rehsnaya',
    }
}

console.log(addres['name']);
console.log(addres['address']);
console.log(addres.address.sity);

//ecercise ==================================================================
let makeUserInfo = (userName, age) => {
    return {
        userName, //свойство будет тоже самое  что и age: age,
        age: age,
    }
}
let user = makeUserInfo('vald', 25)

console.log(user);

// ecercise ==================================================================

let vasua =  {
    age: 25,
    sity: 'BG'
}
console.log(vasua);
// Записываем в обьект свайство имя со занчение Владислав
vasua.name = 'Vladislav'
console.log(vasua.name);
vasua['javascript'] = 'js'
//  Залпиь через квадратные скобри с расширенными возможностями
console.log(vasua['javascript']);

console.log(vasua);

vasua.obj = {
    street: 'rshn',
    dom: 1,
}

console.log(vasua);

// Удаляем свойства ========

delete vasua['javascript']

console.log(vasua);






