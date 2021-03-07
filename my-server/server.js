let options = {
    title : 'menu',
    width: 100,
    height: 200,
}

let { title, width, height} = { title: "helo", height: 299, width:0,}
console.log(height)

let {width: w, height: h} = options
console.log(w, h)

let discribse, circie, squea
({discribse, ...squea } = { discribse : 'rect', circie:5, squea:777})
console.log(squea)


let setting = {
    size: {
        radiys: 50,
        text:'telksjafl;j',
    },
    items: ['cake', 'dount'],
    extra: true,
}

let{ 
    size :{ rad, text},
     items: [cofe, bybl],
    sms = 'hello moto'   // no text 
} = setting
console.log(cofe)

let option = {
    title: 'My meny',
    items: ['item1', 'item2'],
}

let sowMessage = ({title = 'undefined', wid = 200, height = 100, items = []}) => {
    console.log(items)
}
sowMessage(option)

let userName = {
    name: 'jon',
    age: 49,
}

let { name, age, isAdmin: isAdmin = false } = userName
console.log(isAdmin)
console.log(name)

let salaries =  {
    'JON': 100,
    'pete': 300,
    'mary': 2500,
}

let topSal = (salaries) => {
    
    let max = 0
    let maxName

    for(const [name, sallary] of Object.entries(salaries)){
        if(max < sallary) {
            max = sallary
            maxName = name
        } 
    }
    console.log(maxName)
    return maxName
}
topSal(salaries)

