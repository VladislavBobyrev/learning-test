export default {
  // live cercke hoock
  mounted(el, dinding)
  {
    console.log(el)
    console.log(dinding.arg)
    el.style[dinding.arg] = dinding.value
  },
  updated(elem, dinding)
  {
    console.log(elem)
    console.log(dinding)
    elem.style[dinding.arg]  = 'darkblue'
    // elem.style.color = dinding.value
  },
  unmouted(){}
}