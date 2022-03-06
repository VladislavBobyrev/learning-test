<template>

<nav>
  <button class="btn"
@click="sucsess"
>Успешно</button>

<button class="btn danger"
@click=" error"
>Ошибка</button>
</nav>

<app-alert
v-if="alertIsVisible"
:title="alert.title"
:text="alert.text"
:type="alert.type"
closable
@click="alertIsVisible = false"
></app-alert>

<app-block
v-if="alertIsVisible"
:title="alert.title"
:text="alert.text"
:type="alert.type"
@click="alertIsVisible = false"
></app-block>

</template>

<script>
import AppAlert from "./components/AppAlert.vue"
import AppBlock from "./components/AppBlock.vue"

export default {
  props:['close'],
  data(){
   return{
     alertIsVisible: true,
     // по умолчанию
      alert: {
       title:"Внимание",
       type:"warning",
       text:"Предупреждаeм, это предупреждение !!!",
     }
   }
 },
 methods:{
     /**информативное окно в случае ошибки
    * @method sucsess
    * @return {object}*/
   error(){
     try{
      this.alert = {
        title:"Ошибка",
        type:"danger",
        text:"Ошибка соединения с сервером",
      }
      this.alertIsVisible = true
      return{
       alert
      }
     }
      catch (e){
        console.log(e)
     }
   },
   /** информативное окно в случае успеха
    * @method sucsess
    * @return {object}*/
   sucsess(){
      try{
        this.alert = {
        title:"Успешно",
        type:"primary",
        text:"Oперация выполнена за 03 секунды",
      }
     this.alertIsVisible = true
      return{
       alert
      }
     }
      catch (e){
        console.log(e)
     }
   },
 },
components: { AppAlert, AppBlock }
}
</script>
