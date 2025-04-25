<script setup lang="ts">
import { MENU_DATA } from "./menu.data";
import { isOpen } from "./state";
</script>
<template>
  <aside class="sidebar">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 512 512"
      class="exit"
      @click="isOpen = !isOpen"
    >
      <path
        fill="#000000"
        d="M400 145.49L366.51 112L256 222.51L145.49 112L112 145.49L222.51 256L112 366.51L145.49 400L256 289.49L366.51 400L400 366.51L289.49 256z"
      ></path>
    </svg>
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
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  position: relative;
}
.link {
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.email span,
.phone span {
  text-transform: none;
  margin-left: 5px;
}
.phone span {
  font-weight: 700;
}
.exit {
  position: absolute;
  content: "";
  right: 10px;
  top: 10px;
  cursor: pointer;
}
</style>
