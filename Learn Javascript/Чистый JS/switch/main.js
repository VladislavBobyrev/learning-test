//switch (key) {  //сравнивае значения если оно равниварианту то выполняет инструкцию
//    case value:
//        // если вэлью то сделай то-то
//        break;

//    default:
//        break;
//}

let res = 0
//const q = 2
try {
    res = 5 / q
    console.dir(res)
} catch (error) {       // у еррор есть name massege and stack
    console.dir(error.name)    
    console.dir(error.message)    
    console.dir(error.stack)    
}


let multiply = (a, b) => {
    if(b == 0){
        throw new Error("Деление на 0") 
    }
    return a / b
}

let rezult = 0 
try{
    res = multiply(3, 0)
}
catch(error){
    console.dir(error.name)
    console.dir(error.message)
}