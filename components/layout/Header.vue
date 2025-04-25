<script setup lang="ts">
const props = defineProps({
  path: {
    type: Boolean,
  },
});
</script>
<template>
  <LayoutHeaderHome v-if="path" />
  <LayoutHeaderOther v-else />
</template>
