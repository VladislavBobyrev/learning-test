function rec(x){
    if(x >= 10) {
        return
    }
    rec(x + 1)
}
console.dir( rec(4))