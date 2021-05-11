export const respons = () => {
	fetch('server.php', {
	method: 'POST',
	body: FormData
})
.then(data => data.text())
.then(data => console.log(data))
}
 
