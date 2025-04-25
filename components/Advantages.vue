<script setup lang="ts"></script>
<template>
  <div class="advantages__block">
    <Container>
      <h3>Наши преимущества</h3>
      <div class="advantages">
        <div class="advantage">
          <h4>00</h4>
          <h5>лет на рынке Казахстана</h5>
        </div>
        <div class="advantage">
          <h4>00</h4>
          <h5>лет на рынке Казахстана</h5>
        </div>
        <div class="advantage">
          <h4>00</h4>
          <h5>лет на рынке Казахстана</h5>
        </div>
        <div class="advantage">
          <h4>00</h4>
          <h5>лет на рынке Казахстана</h5>
        </div>
      </div>
    </Container>
  </div>
</template>
<style scoped>
h3 {
  font-family: "Open Sans", sans-serif;
  font-size: 48px;
  line-height: 65px;
  font-weight: 700;
}
.advantages {
  display: flex;
  justify-content: space-between;
  width: 1050px;
  margin: 0 auto;
  margin-top: 50px;
}
.advantage {
  display: flex;
  align-items: center;
}
.advantage h4 {
  font-size: 70px;
  font-weight: 700px;
  line-height: 64px;
}
.advantage h5 {
  font-size: 16px;
  line-height: 21px;
  width: 104px;
  margin-left: 10px;
}

@media screen and (max-width: 1350px) {
  .advantages {
    width: 800px;
  }
}
@media screen and (max-width: 1050px) {
  .advantages {
    display: grid;
    width: 700px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
}
@media screen and (max-width: 750px) {
  h3 {
    font-size: 30px;
    line-height: 30px;
  }
  .advantages {
    width: 500px;
  }
}
@media screen and (max-width: 600px) {
  h3 {
    text-align: center;
  }
  .advantages {
    display: flex;
    flex-direction: column;
    width: 250px;
  }
  .advantage {
    justify-content: center;
    flex-wrap: wrap;
  }
  .advantage h4 {
    font-size: 90px;
  }
  .advantage h5 {
    font-size: 25px;
    line-height: 50px;
    margin-left: 20px;
    width: 200px;
    text-align: center;
  }
}
</style>
