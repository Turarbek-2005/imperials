<script setup lang="ts">
useSeoMeta({
  title: "IMPERIALS KZ",
});
const route = useRoute();
const headers = ref(route.path === "/");

watch(
  () => route.path,
  (newPath) => {
    headers.value = newPath === "/";
  }
);
</script>

<template>
  <LayoutHeader :class="{ none: headers }" :path="headers" />
  <div>
    <slot></slot>
  </div>
  <LayoutFooter />
</template>
<style scoped>
.none {
  display: none;
}
</style>
