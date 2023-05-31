<template>
  <div class="app">
    <h1>我是app</h1>
    <h2>新增了一个commitlint</h2>
  </div>
</template>

<script setup lang="ts">
const str = '我愛你祖國'
console.log(str)
const fun = () => {
  console.log('這是沒有格式化的代碼')
}

fun()
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
