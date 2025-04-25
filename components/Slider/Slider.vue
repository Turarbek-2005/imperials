<script setup lang="ts">
import { slides, settings, breakpoints } from "./slides.home";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
const check = props.title == "Направлении" ? "/directions" : "/vacancies";
</script>

<template>
  <div class="slider__block">
    <Container>
      <h3>{{ props.title }}</h3>
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in slides" :key="slide.number">
          <div class="carousel__item">
            <div class="slide">
              <NuxtLink to="/vacancy" class="slide__button">ПОДРОБНЕЕ</NuxtLink>
              <NuxtImg :src="slide.imageSrc" class="slide__img" alt="" />
              <div>
                <p>{{ slide.description }}</p>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <button>
        <NuxtLink :to="check" class="button">Посмотреть все</NuxtLink>
      </button>
    </Container>
  </div>
</template>
<style scoped>
.slider__block {
  margin-top: 70px;
}
h3 {
  font-family: "Open Sans", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 60px;
  text-align: center;
  margin-bottom: 50px;
}

.slide {
  width: 280px;
  height: 486px;
  position: relative;
  border-radius: 10px;
}
.slide:hover .slide__button {
  display: flex;
}

.slide .slide__button {
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
button {
  width: 237px;
  height: 50px;
  background-color: #000c76;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
}

.button {
  width: 100%;
  height: 100%;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.slide__img {
  width: 100%;
  height: 325px;
}
.slide div {
  width: 100%;
  height: 160px;
  display: flex;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
}
.slide p {
  width: 80%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
@media screen and (max-width: 600px) {
  h3 {
    font-size: 24px;
  }
}
</style>
