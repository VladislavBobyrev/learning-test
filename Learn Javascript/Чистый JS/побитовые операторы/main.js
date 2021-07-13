const ACCESS_ADMIN = 1;          // 00001
const ACCESS_GOODS_EDIT = 2;   // 00010
const ACCESS_GOODS_VIEW = 4;     // 00100
const ACCESS_ARTICLE_EDIT = 8; // 01000
const ACCESS_ARTICLE_VIEW = 16;  // 10000

let guest = ACCESS_ARTICLE_VIEW | ACCESS_GOODS_VIEW
let editor = guest | ACCESS_ARTICLE_EDIT | ACCESS_GOODS_EDIT; // 11110
let admin = editor | ACCESS_ADMIN; // 11111

console.log(guest)

console.log(editor  & ACCESS_ADMIN)

// возведение в степень
console.log( 2 << 3)