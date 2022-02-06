<template>
  <div class="card">
    <ul>
      <li v-for="(item, id) in 5">
        <slot :iter="item" :idx="id"></slot>
      </li>
    </ul>
  </div>
</template>