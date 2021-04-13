// interface  не компилируются в готовый проект они нужны на этапе разработки
interface Rect {
    readonly id: string
    collor?: string         // ? не обязательный 
    size: {
        width: number
        height: number
    }
}

const  rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30,
    },
    collor: 'black',    
}

interface RectWithArea extends Rect {
    getArea: () => number
}
const rect2: RectWithArea = {
    id: '1234',
    size: {
        width: 20,
        height: 30,
    },
    getArea(): number {
        return this.size.width * this.size.height
    }    
}

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void{
        this.time = date
    }
}

interface Styles {
    [key:string]: string
}

const css: Styles = {
    border: '1px solid red',
    margin: '2px',
    padding: '8px',
}