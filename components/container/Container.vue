<script setup lang="ts"></script>
<template>
  <div class="container">
    <slot />
  </div>
</template>
<style scoped>
.container {
  max-width: 1216px;
  width: 100%;
  margin: 0 auto;
  padding-left: 0;
  padding-right: 0;
}
@media screen and (max-width: 1251px) {
  .container {
    max-width: 1000px;
  }
}
@media screen and (max-width: 1140px) {
  .container {
    max-width: 768px;
  }
}
@media screen and (max-width: 820px) {
  .container {
    max-width: 580px;
  }
}
@media screen and (max-width: 600px) {
  .container {
    max-width: 400px;
  }
}
@media screen and (max-width: 450px) {
  .container {
    max-width: 300px;
  }
}
</style>
