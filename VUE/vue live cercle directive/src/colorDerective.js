export default {
  // live cercke hoock
  mounted(el, dinding)
  {
    console.log(el)
    console.log(dinding)
    el.style.color = dinding.value
  },
  updated(elem, dinding)
  {
    console.log(elem)
    console.log(dinding)
    elem.style.color = 'darkblue'
  },
  unmouted(val, binding)
  {
    console.log(val)
    console.log(binding)
  }
}