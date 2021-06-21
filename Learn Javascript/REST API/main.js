fetch('http://api.zippopotam.us/us/20500')
.then(data => data.json())
.then(data => setHEro(data))

function setHEro  ({country}) {
	document.querySelector('.root').innerHTML(country)
}