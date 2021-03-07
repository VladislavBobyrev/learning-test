const button = document.querySelector('button')
const ul = document.querySelector('ul')

const createElement = item => {
  const li = document.createElement('li')
  const h1 = document.createElement('h1')
  const p = document.createElement('p')
  const img = document.createElement('img')

  h1.innerHTML = item.name
  p.innerHTML = item.tel
  img.src = `http://localhost:8080/${item.pic}`

  li.append(h1)
  li.append(p)
  li.append(img)

  return li
}

const onDataFetched = array => {
  array.map(createElement).forEach(el => ul.append(el))
}

button.addEventListener('click', async () => {
  const res = await fetch('http://localhost:6678')
  const data = await res.json()

  onDataFetched(data)
})
