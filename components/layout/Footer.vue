<script setup lang="ts"></script>
<template>
  <div class="footer__block">
    <Container class="footer">
      <div class="footer__links">
        <NuxtLink to="/"
          ><NuxtImg src="/home/logo-white.svg" width="52px" alt="" class="logo"
        /></NuxtLink>
        <LayoutFooterSidebar />
      </div>
      <div class="footer__contacts">
        <div class="contacts">
          <h4>Контакты</h4>
          <div class="links">
            <div class="phones">
              <NuxtLink class="phone">
                <NuxtImg src="/home/phone-white.svg" />
                <p>+ 7 (777) 777-77-77</p>
              </NuxtLink>
              <NuxtLink class="phone">
                <NuxtImg src="/home/phone-white.svg" />
                <p>+ 7 (777) 777-77-77</p>
              </NuxtLink>
            </div>
            <div class="info">
              <NuxtLink class="email">info@example-mail.kz</NuxtLink>
              <div class="networks">
                <NuxtImg class="network" src="/home/instagram-white.svg" />
                <NuxtImg class="network" src="/home/tiktok-white.svg" />
                <NuxtImg class="network" src="/home/telegram-white.svg" />
              </div>
            </div>
          </div>
        </div>
        <label>RU</label>
      </div>
    </Container>
  </div>
</template>
<style scoped>
.footer__block {
  height: 191px;
  width: 100%;
  background-color: #000c76;
  margin-top: 40px;
  display: flex;
  align-items: center;
  color: #fff;
}
.logo {
  margin-right: 115px;
  margin-bottom: 10px;
}
.footer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footer__links {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-right: 1px solid #dcdcdc;
  padding-right: 77px;
}
.footer__contacts {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 77px;
}
.footer__contacts h4 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
}
.links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.phones {
  margin-right: 32px;
  height: 52px;
  margin-bottom: 10px;
}
.phone {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  height: 20px;
  cursor: pointer;
}
.phone:last-child {
  margin-bottom: 0;
}
.info {
  height: 52px;
}
.phone p {
  margin-left: 15px;
  font-size: 16px;
  font-weight: 500;
}
.info .email {
  font-weight: 500;
  cursor: pointer;
}
.info .networks {
  display: flex;
  align-items: center;
  margin-top: 12px;
}
.info .network {
  margin-right: 20px;
  cursor: pointer;
}
label {
  font-size: 18px;
  font-weight: 700;
}
@media screen and (max-width: 1250px) {
  .footer__links {
    border-right: none;
    padding-right: 20px;
    flex-wrap: wrap;
  }
  .footer__contacts {
    border-right: none;
    padding-left: 0;
  }
}
@media screen and (max-width: 600px) {
  .footer__block {
    height: 320px;
    padding: 0 10px;
  }
  .footer {
    display: block;
    text-align: center;
  }
  .footer__links {
    width: 100%;
  }
  .footer__contacts {
    margin-top: 20px;
    width: 100%;
  }
}
</style>
