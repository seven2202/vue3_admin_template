<template>
  <div class="app">
    <h1>我是app</h1>
    <h2>新增了一个commitlint</h2>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </div>
</template>

<script setup lang="ts">
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
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
