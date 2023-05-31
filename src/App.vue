<template>
  <div class="app">
    <h1>我是app</h1>
  </div>
</template>

<script setup lang="ts">
const str = '我愛你祖國'
console.log(str)
</script>

<style scoped lang="scss">
.app {
  width: 200px;
  height: 100px;
  background: black;
  h1 {
    color: red;
  }
}
</style>
