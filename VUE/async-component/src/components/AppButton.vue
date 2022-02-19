<template>

  <button>
    <slot />
  </button>
</template>

<script>
export default {
  methods:{
    appButtonLog() {
      console.log('appButtonLog')
    }
  }
}
</script>