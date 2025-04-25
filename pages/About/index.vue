<script setup lang="ts">
import { slides, settings } from "./slides.gallery";
import {
  slidesReviews,
  settingsReviews,
  breakpointsReviews,
} from "./slides.reviews";
</script>
<template>
  <div class="about">
    <div class="description">
      <Container>
        <h3>О нас</h3>
        <h4>
          Мини-описание. Это текст о компании. Он необходим для дальнейшего
          продвижения Вашего сайта.
        </h4>
        <h5>
          <p>
            Мини-описание. Это текст о компании. Он необходим для дальнейшего
            продвижения Вашего сайта. Мини-описание. Это текст о компании. Он
            необходим для дальнейшего продвижения Вашего сайта. Мини-описание.
            Это текст о компании. Он необходим для дальнейшего продвижения
            Вашего сайта.
          </p>

          <p>
            Мини-описание. Это текст о компании. Он необходим для дальнейшего
            продвижения Вашего сайта.Мини-описание. Это текст о компании. Он
            необходим для дальнейшего продвижения Вашего сайта.
          </p>

          <p>
            Мини-описание. Это текст о компании. Он необходим для дальнейшего
            продвижения Вашего сайта.Мини-описание. Это текст о компании. Он
            необходим для дальнейшего продвижения Вашего сайта.Мини-описание.
            Это текст о компании. Он необходим для дальнейшего продвижения
            Вашего сайта.Мини-описание. Это текст о компании. Он необходим для
            дальнейшего продвижения Вашего сайта.Мини-описание. Это текст о
            компании. Он необходим для дальнейшего продвижения Вашего сайта.
          </p>

          <p>
            Мини-описание. Это текст о компании. Он необходим для дальнейшего
            продвижения Вашего сайта.Мини-описание. Это текст о компании. Он
            необходим для дальнейшего продвижения Вашего сайта.Мини-описание.
            Это текст о компании. Он необходим для дальнейшего продвижения
            Вашего сайта.Мини-описание. Это текст о компании. Он необходим для
            дальнейшего продвижения Вашего сайта.Мини-описание. Это текст о
            компании. Он необходим для дальнейшего продвижения Вашего
            сайта.Мини-описание. Это текст о компании. Он необходим для
            дальнейшего продвижения Вашего сайта.
          </p>
        </h5>
      </Container>
    </div>
    <Advantages />
    <div class="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/I3TDakzL_d0?si=1-zZB-PyObih6yhW"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div class="specialists">
      <Container>
        <h3>Специалисты</h3>
        <div class="cards">
          <div class="card">
            <NuxtImg src="/specialists-1.jpg" alt="" class="card__img" />
            <h4>Иванова И.И.</h4>
            <h5>Психолог</h5>
          </div>
          <div class="card">
            <NuxtImg src="/specialists-2.jpg" alt="" class="card__img" />
            <h4>Иванова И.И.</h4>
            <h5>Психолог</h5>
          </div>
          <div class="card">
            <NuxtImg src="/specialists-3.jpg" alt="" class="card__img" />
            <h4>Иванова И.И.</h4>
            <h5>Психолог</h5>
          </div>
          <div class="card">
            <NuxtImg src="/specialists-4.jpg" alt="" class="card__img" />
            <h4>Иванова И.И.</h4>
            <h5>Психолог</h5>
          </div>
        </div>
      </Container>
    </div>
    <div class="gallery">
      <Container>
        <h3>Фотогалерея</h3>
        <Carousel v-bind="settings">
          <Slide v-for="slide in slides" :key="slide.number">
            <div class="carousel__item">
              <div class="slide">
                <NuxtImg :src="slide.imageSrc" class="slide__img" alt="" />
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </Container>
    </div>
    <div class="reviews">
      <Container>
        <h3>Отзывы</h3>
        <Carousel v-bind="settingsReviews" :breakpoints="breakpointsReviews">
          <Slide v-for="slide in slidesReviews" :key="slide.number">
            <div class="carousel__item">
              <div class="reviews__slide">
                <NuxtImg
                  :src="slide.imageSrc"
                  class="reviews__slide__img"
                  alt=""
                />
                <div class="reviews__slide__text">
                  <h4>Дастан</h4>
                  <h5>
                    Здесь будет мини-описание. Это текст о компании.
                    Он необходим для дальнейшего продвижения вашего сайта Здесь
                    будет мини-описание. Это текст о компании. Он необходим
                    для дальнейшего продвижения Здесь будет мини-описание.
                    Это текст о компании. Он необходим для дальнейшего
                  </h5>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </Container>
    </div>
  </div>
</template>
<style scoped>
.about {
  margin-top: 50px;
}
.description {
  margin-bottom: 70px;
}
.description h3 {
  font-family: "Open Sans", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 65px;
}
.description h4 {
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  margin-top: 10px;
}
.description h5 {
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  margin-top: 20px;
}
.description p {
  margin-bottom: 30px;
}
.description p:last-child {
  margin-bottom: 0px;
}
.video {
  margin: 70px 0;
}
.video iframe {
  margin: 0 auto;
}
@media screen and (max-width: 600px) {
  .video iframe {
    padding: 0 10px;
    width: 100%;
    height: cover;
  }
}
.specialists {
  text-align: center;
}

.specialists h3 {
  font-size: 48px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  margin-bottom: 50px;
}
.specialists .cards {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}
.specialists .card {
  width: 282px;
  height: 400px;
  text-align: left;
  margin-bottom: 10px;
}
.specialists .card h4 {
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  margin-top: 20px;
}
.specialists .card h5 {
  font-size: 18px;
  font-weight: 500;
  color: #747279;
  margin-top: 7px;
}
@media screen and (max-width: 641px) {
  .specialists h3 {
    font-size: 24px;
  }
  .specialists .cards {
    justify-content: center;
  }
}
.gallery {
  text-align: center;
  margin-top: 70px;
}
.gallery h3 {
  font-size: 48px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  margin-bottom: 50px;
}
.gallery .slide__img {
  max-width: 1072px;
  height: auto;
}
@media screen and (max-width: 1250px) {
  .gallery .slide__img {
    height: 400px;
  }
}
@media screen and (max-width: 820px) {
  .gallery {
    margin-top: 30px;
  }
  .gallery .slide__img {
    height: 300px;
  }
}
@media screen and (max-width: 650px) {
  .gallery .slide__img {
    height: 200px;
  }
  .gallery h3 {
    font-size: 24px;
  }
}
@media screen and (max-width: 450px) {
  .gallery .slide__img {
    height: 150px;
  }
}
.reviews {
  margin-top: 70px;
  text-align: center;
}

.reviews h3 {
  font-size: 48px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  margin-bottom: 50px;
}
.reviews__slide {
  height: 188px;
  display: flex;
}
.reviews__slide__img {
  width: 112px;
  height: 108px;
  margin-right: 28px;
}
.reviews__slide__text {
  width: 375px;
  text-align: left;
}
.reviews__slide__text h4 {
  font-size: 18px;
  font-weight: 700;
  color: #4b4b4d;
  margin-bottom: 20px;
}
.reviews__slide__text h5 {
  font-size: 16px;
  font-weight: 300;
  color: #4b4b4d;
  line-height: 19px;
}
@media screen and (max-width: 820px) {
  .reviews {
    margin-top: 30px;
  }
}
@media screen and (max-width: 650px) {
  .reviews h3 {
    font-size: 24px;
  }
}
@media screen and (max-width: 500px) {
  .reviews__slide__img {
    margin: 0 auto;
  }
  .reviews__slide {
    flex-wrap: wrap;
    height: 330px;
    text-align: center;
  }
  .reviews__slide__text h5 {
    font-size: 12px;
  }
  .reviews__slide__text {
    width: 100%;
  }
}
</style>
