<template>

<aside class="card" 
v-for="item in infoCard"
@itter="isItter"
>
  <div class="card_icon"></div>
  <section class="card_body">
    <div class="card_title">{{item.title}}</div>
    <div class="card_text">{{item.text}}</div>
  </section>
</aside>

</template>

<script>
export default {
  emits: ['id'],
  methods:{
    itter(){
      this.id++
      this.$emit('itter', { id: this.id})
    }
  },
  data(){
    return{
     infoCard: [
       {
         title: 'Title 1',
         text: 'text text texttexttext text text '
       },
       {
         title: 'Title 2',
         text: 'text text texttexttext text text '
       },
       {
         title: 'Title 3',
         text: 'text text texttexttext text text '
       },

     ],
     id: 1,
    }
  }
}
</script>