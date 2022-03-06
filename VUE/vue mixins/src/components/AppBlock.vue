<template>
  <article class="alert" :class="type">
    <p class="alert-title">{{title}}</p>
    <p >{{text}}</p>
    <hr/>
    <button :class="type" class="btn" 
    @click="$emit('close')"
    v-if="closable">{{closable ? "Close" : " Open"}}</button>
  </article>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.alert {
    padding: 1rem 1.5rem;
    border-left-width: 0.5rem;
    border-left-style: solid;
    margin: 1rem 0;
    background: #f3f3f3 ;
    position: relative;
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    border-radius: 5px;
    animation: alert 0.4s cubic-bezier(0.21, 0.45, 0.82, 0.92);
}

.alert.primary {
    border-color: #42b983;
     
}

.alert.danger {
    border-color: #e53935;
    
}

.alert.warning {
    border-color: #c25205;
    
}
@keyframes alert {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}
.alert p {
    color: #222;
    line-height: 1.7;
}

.alert-title {
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: -0.4rem;
    color: #222;
}
</style>