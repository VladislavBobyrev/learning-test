let arr8 = new Uint8Array(4)
// перезаписали в 16 битовый вариант
let arr16 = new Uint16Array(arr8)

console.log(arr8.byteLength)
console.log(arr8.BYTES_PER_ELEMENT)

// ================= DataView
let buffer = new Uint8Array([255, 255, 255, 255]).buffer
console.log(buffer)

let dataView = new DataView(buffer)
console.log( dataView.getUint8(0))
console.log( dataView.getUint16(0))
console.log( dataView.getUint32(1))