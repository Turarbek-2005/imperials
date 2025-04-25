<script setup lang="ts">
import { vacancies } from "./vacancies.data";
</script>
<template>
  <div class="vacancies__block">
    <Container>
      <h3>Вакансии</h3>
      <div class="vacancies">
        <div class="vacancy" v-for="vacancy in vacancies" :key="vacancy.number">
          <NuxtLink to="/vacancy" class="vacancy__button">ПОДРОБНЕЕ</NuxtLink>
          <NuxtImg :src="vacancy.imageSrc" class="vacancy__img" alt="" />
          <div>
            <p>{{ vacancy.description }}</p>
            <label>{{ vacancy.price }}</label>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
<style scoped>
.vacancies__block {
  margin-top: 50px;
}
h3 {
  font-family: "Open Sans", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 50px;
}
.vacancies {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.vacancy {
  width: 280px;
  height: 471px;
  position: relative;
  border-radius: 10px;
  margin-bottom: 50px;
}
.vacancy:hover .vacancy__button {
  display: flex;
}

.vacancy .vacancy__button {
  position: absolute;
  width: 237px;
  height: 50px;
  top: 40%;
  background-color: #000c76;
  border-radius: 5px;
  font-weight: 500;
  color: #fff;
  left: 50%;
  transform: translateX(-50%);
  animation: 0.4s show ease;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: none;
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.vacancy__img {
  width: 100%;
}
.vacancy div {
  width: 100%;
  height: 160px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
}
.vacancy p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0 auto;
  margin-top: 36px;
}
.vacancy label {
  font-size: 16px;
  font-weight: 700;
  margin-top: 40px;
}
@media screen and (max-width: 600px) {
  .vacancies__block {
    margin-top: 20px;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .vacancies {
    justify-content: center;
  }
}
</style>
