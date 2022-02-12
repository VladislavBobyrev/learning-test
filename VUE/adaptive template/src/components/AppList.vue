<template>

<article  class="card"
v-for="item in news"
:user="Username">
  <h2>{{item.title}}</h2>
  <p>{{item.text}}</p>
  <div>{{id}}</div>
</article>

</template>

<script>
export default {
  props:{
    id:{
      type: Array
    }
  },
  emits:{
    userName:['Vladislav', "Georg", 'Alex'  ]
  },
  data(){
    return {
      news: [
        {
          title: 'news title 1',
          text: 'text lorem lsjdfls  jfsdkf lj sdflj fsldkj'
        },
        {
          title: 'news title 2',
          text: 'text lorem lsjdfls  jfsdkf lj sdflj fsldkj'
        },
        {
          title: 'news title 3',
          text: 'text lorem lsjdfls  jfsdkf lj sdflj fsldkj'
        },
        {
          title: 'news title 4',
          text: 'text lorem lsjdfls  jfsdkf lj sdflj fsldkj'
        },
      ]
    }
  }
}
</script>