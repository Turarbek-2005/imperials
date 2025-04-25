<script setup lang="ts">
import { MENU_DATA } from "./menu.data";
</script>
<template>
  <aside class="sidebar">
    <NuxtLink
      class="link"
      v-for="item in MENU_DATA"
      :to="item.url"
      :key="item.name"
    >
      {{ item.name }}
    </NuxtLink>
  </aside>
</template>
<style scoped>
.sidebar {
  width: 360px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  flex-wrap: wrap;
}
.link {
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 5px;
}
</style>
