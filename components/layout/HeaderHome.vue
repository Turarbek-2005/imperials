<script setup lang="ts">
import { isOpen } from "./state";
const width = ref<number | null>(null);
const tabletView = ref(false);

const myEventHandler = () => {
  width.value = window.innerWidth;
  tabletView.value = width.value <= 1251;
};

onMounted(() => {
  window.addEventListener("resize", myEventHandler);
  myEventHandler();
});

onUnmounted(() => {
  window.removeEventListener("resize", myEventHandler);
});
</script>
<template>
  <Container>
    <div class="header">
      <NuxtLink to="/"
        ><NuxtImg src="/home/logo-white.svg" width="47px" alt=""
      /></NuxtLink>
      <LayoutSidebarHome v-if="!tabletView" />
      <div class="networks">
        <NuxtLink class="network" href="https://www.instagram.com/">
          <NuxtImg
            src="/home/instagram-white.svg"
            alt="instagram"
            height="19px"
          />
        </NuxtLink>
        <NuxtLink class="network" href="https://www.tiktok.com/">
          <NuxtImg src="/home/tiktok-white.svg" alt="tiktok" height="19px" />
        </NuxtLink>
        <NuxtLink class="network" href="https://telegram.org/">
          <NuxtImg
            src="/home/telegram-white.svg"
            alt="telegram"
            height="19px"
          />
        </NuxtLink>
        <label>RU</label>
      </div>
      <button class="burger" v-if="tabletView" @click="isOpen = !isOpen">
        <div class="burger__menu">
          <div></div>
        </div>
      </button>
      <USlideover class="slider" v-model="isOpen">
        <LayoutAdaptiveSidebar />
      </USlideover>
    </div>
  </Container>
</template>
<style scoped>
.header {
  padding-top: 20px;
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.networks {
  display: flex;
  align-items: center;
}
.network {
  margin-right: 20px;
}
.network:nth-child(3) {
  margin-right: 40px;
}
.network:last-child {
  margin-right: 0px;
}
.networks label {
  font-weight: 700;
  font-size: 18px;
}
.burger {
  width: 30px;
  height: 20px;
  position: relative;
}

.burger__menu div {
  position: absolute;
  content: "";
  top: 50%;
  height: 2px;
  background: #fff;
  transform: translateY(-50%);
  width: 100%;
}
.burger__menu::before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 2px;
  background: #fff;
  width: 100%;
}
.burger__menu::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  height: 2px;
  background: #fff;
  width: 100%;
}
</style>
