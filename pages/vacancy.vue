<script setup lang="ts"></script>
<template>
  <div class="vacancy__block">
    <Container>
      <div class="vacancy">
        <NuxtImg src="/vacancy-img.svg" class="vacancy__img" alt="" />
        <div class="vacancy__text">
          <h3>Заголовок вакансий</h3>
          <h4>
            <p>
              Это текст о компании. Он необходим для дальнейшего продвижения
              вашего сайта. Вам будет необходимо предоставить исходные данные,
              по которым наши копирайтеры текст. Это текст о компании.
              Он необходим для дальнейшего продвижения вашего сайта. Вам будет
              необходимо предоставить исходные данные, по которым наши
              копирайтеры текст.
            </p>
            <p>
              Это текст о компании. Он необходим для дальнейшего продвижения
              вашего сайта. Вам будет необходимо предоставить исходные данные,
              по которым наши копирайтеры текст. Это текст о компании.
            </p>
            <p>
              Это текст о компании. Он необходим для дальнейшего продвижения
              вашего сайта. Вам будет необходимо предоставить исходные данные,
              по которым наши копирайтеры текст. Это текст о компании.
            </p>
          </h4>
          <button>
            <NuxtLink class="button">отправить резюме</NuxtLink>
          </button>
        </div>
      </div>
    </Container>
  </div>
</template>
<style scoped>
.vacancy__block {
  margin-top: 86px;
}
.vacancy {
  display: flex;
}
.vacancy__img {
  margin-right: 32px;
}
h3 {
  font-size: 36px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  line-height: 50px;
}
h4 {
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  color: #555555;
  line-height: 170%;
}
p {
  margin-bottom: 20px;
}
p:last-child {
  margin-bottom: 0;
}
button {
  width: 240px;
  height: 50px;
  background-color: #000c76;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  text-transform: uppercase;
}

.button {
  width: 100%;
  height: 100%;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  transition: 0.4s;
}
button:hover {
  background-color: #212c8f;
}
@media screen and (max-width: 1140px) {
  .vacancy__block {
    margin-top: 20px;
  }
  .vacancy__img {
    display: none;
  }
}
</style>
