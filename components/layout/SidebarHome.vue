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
    <NuxtLink class="link email" href="">
      <NuxtImg src="/home/gmail-white.svg" alt="gmail" width="17px" />
      <span>info@example-mail.kz</span>
    </NuxtLink>
    <NuxtLink class="link phone" href="">
      <NuxtImg src="/home/phone-white.svg" alt="phone" width="17px" />
      <span>+ 7 (777) 777-77-77</span>
    </NuxtLink>
  </aside>
</template>
<style scoped>
.sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
}
.link {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
}
.email span,
.phone span {
  text-transform: none;
  margin-left: 5px;
}
.phone span {
  font-weight: 700;
}
</style>
