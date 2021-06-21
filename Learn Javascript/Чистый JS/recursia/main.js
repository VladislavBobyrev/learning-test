//function rec(x){
//    if(x >= 10) {
//        return
//    }
//    rec(x + 1)
//}
//console.dir( rec(4))

//function recurs (a){
//	if(a > 10) {
//		return
//	}
//return	a >=10 ? null : recurs(a + 1 )	
//}
//console.log(recurs(2))





const recursia = (n) => {
	if(n === 0 ) {
		return 1
	} else {
		return n * recursia(n -1)
	}
}

console.log(recursia(4))