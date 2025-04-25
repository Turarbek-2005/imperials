<script setup lang="ts">
const colorMode = useColorMode();
colorMode.value === "light";
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url(./reset.css);
body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
</style>
