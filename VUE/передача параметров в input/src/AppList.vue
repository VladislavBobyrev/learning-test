<template>
<article>
  <h2 class="title">Title</h2>

  <label for="sity"></label>
    <input type="text" id="sity" list="sityes">
    <datalist id="sityes">
      <option value="moscow"></option>
      <option value="america"></option>
      <option value="france"></option>
    </datalist>
</article>

</template>

<script>
export default {
  // props
}
</script>