<script setup lang="ts">
const name = ref("");
const phone = ref("");

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
  <div class="home">
    <div class="intro">
      <LayoutHeader :path="headers" />
      <Container class="container">
        <h2>Трудоустройство за рубежом</h2>
        <h4>
          Мини-описание. Это текст о компании. Он необходим для дальнейшего
          продвижения Вашего сайта.
        </h4>
        <button>
          <NuxtLink to="/vacancies" class="button">СМОТРЕТЬ ВАКАНСИИ </NuxtLink>
        </button>
      </Container>
    </div>
    <div class="about">
      <Container>
        <h3>Кто мы</h3>
        <h4>
          <p>
            Это текст о компании. Он необходим для дальнейшего продвижения
            вашего сайта. Вам будет необходимо предоставить исходные данные,
            по которым наши копирайтеры текст.
          </p>
          <p>
            Это текст о компании. Он необходим для дальнейшего продвижения
            вашего сайта. Вам будет необходимо предоставить исходные данные,
            по которым наши копирайтеры текст.
          </p>
          <p>
            Вам будет необходимо предоставить исходные данные, по которым наши
            копирайтеры текст
          </p>
        </h4>
        <button>
          <NuxtLink to="/about" class="button">О компании</NuxtLink>
        </button>
      </Container>
    </div>
    <Advantages />
    <Slider :title="'Направлении'" />
    <Slider :title="'Горячие вакансии'" />
    <div class="form">
      <Container>
        <h2>Заполните нашу анкету или оставьте данные для консультации</h2>
        <button class="form__button">
          <NuxtLink class="button">Перейти к анкете</NuxtLink>
        </button>
        <div class="form__consultation">
          <h3>Бесплатная консультация</h3>
          <form action="">
            <div class="form__inputs">
              <input type="text" v-model="name" placeholder="Ваше имя" />
              <input type="text" v-model="phone" placeholder="Ваш телефон" />
            </div>
            <button class="form__button">
              <NuxtLink class="button">Заказать звонок</NuxtLink>
            </button>
          </form>
        </div>
      </Container>
    </div>
  </div>
</template>
<style scoped>
.intro {
  height: 769px;
  background-image: url("/home/home-bg.jpg");
  background-size: cover;
  color: #fff;
}
.intro h2 {
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 64px;
  line-height: 80px;
  max-width: 600px;
  margin-top: 150px;
}
.intro h4 {
  font-size: 18px;
  line-height: 28px;
  width: 490px;
  margin-top: 10px;
}
button {
  width: 240px;
  height: 50px;
  background-color: #000c76;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 40px;
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

@media screen and (max-width: 1231px) {
  .intro {
    height: 600px;
  }
  .intro h2 {
    font-size: 42px;
    line-height: 42px;
    width: 350px;
  }
  .intro h4 {
    font-size: 12px;
    width: 300px;
    line-height: 16px;
  }
}

@media screen and (max-width: 600px) {
  .intro {
    text-align: center;
  }
  .intro h2 {
    margin: 150px auto 0 auto;
    font-size: 25px;
    width: 250px;
  }
  .intro h4 {
    margin: 10px auto 0 auto;
    width: 200px;
  }
}

.about {
  position: relative;
  margin-top: 105px;
  margin-bottom: 150px;
}
.about::after {
  position: absolute;
  content: "";
  width: 707px;
  height: 476px;
  background-image: url(/home/home-about.jpg);
  right: 0;
  top: -35px;
  z-index: -1;
  background-size: cover;
}
.about h3 {
  font-family: "Open Sans", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 65px;
}
.about h4 {
  font-size: 16px;
  line-height: 24px;
  width: 520px;
  margin-top: 8px;
}
.about h4 p {
  margin-bottom: 15px;
}
.about h4 p:last-child {
  margin-bottom: 0;
}
@media screen and (max-width: 1350px) {
  .about::after {
    width: 500px;
    height: 400px;
  }
}
@media screen and (max-width: 1140px) {
  .about::after {
    display: none;
  }
  .about {
    margin-bottom: 70px;
  }
}
@media screen and (max-width: 600px) {
  .about {
    text-align: center;
    margin-top: 60px;
  }
  .about h3 {
    font-size: 30px;
    line-height: 30px;
  }
  .about h4 {
    margin: 16px auto 0 auto;
    width: 280px;
  }
}
.form {
  margin-top: 70px;
  position: relative;
}
.form__button {
  margin-top: 60px;
  text-transform: uppercase;
}
.form h2 {
  font-family: "Open Sans", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 65px;
  width: 644px;
}
.form__consultation {
  margin-top: 70px;
}
.form h3 {
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
}
.form input {
  width: 275px;
  height: 50px;
  border: none;
  border-bottom: 1px solid #424b5a;
  outline: none;
  margin-right: 20px;
  font-size: 28px;
}
.form input::placeholder {
  font-size: 16px;
}
form {
  margin-top: 50px;
  margin-bottom: 100px;
}
.form::after {
  position: absolute;
  content: "";
  width: 562px;
  height: 674px;
  background-image: url(/home/form-img.jpg);
  right: 0;
  top: 0;
  z-index: -1;
  background-repeat: no-repeat;
  border-radius: 5px;
}
@media screen and (max-width: 1250px) {
  .form::after {
    display: none;
  }
}
@media screen and (max-width: 1140px) {
  .form h2 {
    font-size: 36px;
    line-height: 36px;
  }
  .form__consultation {
    margin-top: 40px;
  }
}
@media screen and (max-width: 600px) {
  .form h2 {
    width: 270px;
    margin: 0 auto;
  }
  .form {
    text-align: center;
  }
}
</style>
