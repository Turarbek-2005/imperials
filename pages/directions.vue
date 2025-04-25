<script setup lang="ts"></script>
<template>
  <div class="directions__block">
    <Container>
      <h3>Направлении</h3>
      <div class="directions">
        <div class="direction">
          <NuxtImg src="/direction-1.jpg" alt="" width="100%" />
          <h4>Work and Travel Germany</h4>
          <h5>
            Это текст о компании. Он необходим для дальнейшего продвижения
            вашего сайта. Вам будет необходимо предоставить исходные данные,
            по которым наши копирайтеры текст. Это текст о компании.
          </h5>
        </div>
        <div class="direction">
          <NuxtImg src="/direction-2.jpg" alt="" width="100%" />
          <h4>Повышение квалификации в Германии, выпускникам вузов</h4>
          <h5>
            Это текст о компании. Он необходим для дальнейшего продвижения
            вашего сайта. Вам будет необходимо предоставить исходные данные
          </h5>
        </div>
        <div class="direction">
          <NuxtImg
            src="/direction-3.jpg"
            alt=""
            class="direction__img"
            width="100%"
          />
          <h4>Трудоустройтво в Польше</h4>
          <h5>
            Это текст о компании. Он необходим для дальнейшего продвижения
            вашего сайта. Вам будет необходимо предоставить исходные данные,
            по которым наши копирайтеры текст. Это текст о компании.
          </h5>
        </div>
        <div class="direction">
          <NuxtImg src="/direction-4.jpg" alt="" width="100%" />
          <h4>Трудоустройство в Германии</h4>
          <h5>
            Это текст о компании. Он необходим для дальнейшего продвижения
            вашего сайта. Вам будет необходимо предоставить исходные данные,
            по которым наши копирайтеры текст. Это текст о компании.
          </h5>
        </div>
      </div>
    </Container>
  </div>
</template>
<style scoped>
.directions__block {
  margin-top: 50px;
}
.directions__block h3 {
  font-size: 48px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 50px;
}
.directions {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.direction {
  width: 592px;
  height: 454px;
  margin-bottom: 60px;
}
.direction__img {
  width: 100%;
  height: 314px;
}
.direction h4 {
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
  margin-top: 13px;
  margin-bottom: 10px;
}
.direction h5 {
  font-size: 16px;
  line-height: 170%;
  color: #555555;
}
@media screen and (max-width: 1250px) {
  .directions {
    justify-content: center;
    margin-bottom: 20px;
  }
  .direction {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 600px) {
  .direction__img {
    height: auto;
  }
  .directions__block h3 {
    font-size: 24px;
  }
}
</style>
