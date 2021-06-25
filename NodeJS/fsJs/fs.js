const path = require('path')
// const up = () => console.log(path.join(__dirname, 'server'))
// module.exports = up

const fs = require('fs')

const fs = fs.mkdir(path.join(__dirname, test),(err) => {
if(err) {
	throw err
}
console.log(`folder compleet ))`)
})

module.exports = fs