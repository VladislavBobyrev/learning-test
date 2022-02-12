<template>
  <div class="card">
     <slot v-if="$slots.footer" name="header"></slot>
     
         <!-- clot п умолчанию имеет занчение default -->
      <slot> <p>no text</p></slot>
    <slot v-if="$slots.footer" name="footer"></slot>

  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots)
  }
}
</script>