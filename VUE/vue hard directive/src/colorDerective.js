// для сщхранения значения выносим в глобальную область видимости
const mouseover = evt =>
{
  console.log(evt)
  evt.target.style.color = '#f0f'
}
const mouseout = evt =>
{
  evt.target.style.color = '#f00'
}

export default {
  // live cercke hoock
  mounted(el, binding)
  {
    console.log(el)
    console.log(binding.arg)
    el.style[binding.arg] = binding.value

    if (binding.modifiers.blinck)
    {
      let flag = true
      let intervalId =  setInterval(() =>
      {
        console.log()
        el.style.color = flag ? '#fff' : binding.value
        flag = !flag
      }, 2000);
      // clearInterval(intervalId)
    }

    if (binding.modifiers.hover)
    {
      el.addEventListener('mouseover', mouseover)
      el.addEventListener('mouseout', mouseout)
    }
  },
  updated(elem, binding)
  {
    console.log(elem)
    console.log(binding)
    elem.style[binding.arg]  = 'darkblue'
    // elem.style.color = binding.value
  },
  unmouted(){}
}