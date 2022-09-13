<template>
  <div class="home-bg">
  <div class="home-intro">
    <div class="container">
      <div class="home-intro-wrapper">
        <div class="home-intro__title">
          <h1>Digital Agency <br/>and Marketing</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing </p>
        </div>
        </div> 
      </div>
    </div>
     <div class="home-text">
    <div class="container">
      <div class="home-text-wrapper">
        <div class="home-text-info">
          <h4 class="home-text-title">How PixYz IT make your life easier</h4>
          <p class="home-text-descripton">
            Working fast, Proactively and strategically as your trusted Managed
            Services Provider, we can take away the burden of mundane day-to-day
            tasks, protect your organization from security threats, manage your
            IT infrastructure and workloads, as well as help you to achieve an
            awful lot more - discover how PixYz IT can support you and help you
            to transform your organization Working fast, Proactively and
            strategically as your trusted Managed Services Provider, we can take
            away the burden of mundane day-to-day tasks, protect your
            organization from security threats, manage your IT infrastructure
            and workloads, as well as help you to achieve an awful lot more -
            discover how PixYz IT can support you and help you to transform your
            organization
          </p>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>


<style scoped lang="scss">
  .home-bg {
    background: url(@/assets/img/bg-intro.png) no-repeat center/cover;
    position: relative;
    z-index: 2;
    background-position-x: 0;
    background-position-y: 0px;
  
.home-intro{
    position: relative;
    z-index: 2;
  .container {
   background: url(@/assets/img/intro-img.png) no-repeat right top 220px;
    padding-top: 250px;
    padding-bottom: 350px;
      @media (max-width: 1904px){
        background-size: 500px;
        background-position-y: 190px;
    }
      @media (max-width: 1500px){
        background-size: 450px;
        background-position-y: 190px;
    }
    @media(max-width: 960px){
      background-size: 350px;
      background-position: center bottom;
      padding: 100px 0 250px;
      margin-bottom: 100px;

    }
  }
  &-wrapper {
   @media screen and (max-width: 1264px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    background-image: none;
  }
  }
  &__title {
    h1 {
    font-size: 56px;
    width: 650px;
    position: relative;
    font-weight: 700;
    z-index: 9999;
      @media (max-width: 1500px){
        font-size: 40px;
      }
      @media(max-width: 1264px){
        font-size: 30px;
        width: 450px;
      }
     @media(max-width: 960px){
      width: 100%;
      text-align:center;
    }
    &::before {
      content: url(@/assets/img/title-img.png);
      position: absolute;
      left: -80px;
      top: 45px;
      @media(max-width:1500px){
        top: 0px;
        left: -60px;
      }
      @media(max-width: 1050px){
        display: none;
      }
    }
    &::after {
    content: '';
    position: absolute;
    top: -70px;
    left: 200px;
    z-index: -1;
    background: url(@/assets/img/title-round.png) no-repeat center/cover;
    width: 232px;
    height: 232px;
      @media(max-width: 1500px){
        left: 100px;
      }
      @media(max-width: 960px){
        display: none;
      }
    }
   }
   p {
    font-size: 24px;
    margin-top: 22px;
    font-weight: 300;
      @media (max-width: 1500px){
        font-size: 20px;
         width: 500px;
      } 
      @media(max-width: 1264px){
        font-size: 16px;
        width: 400px;
      }
     @media(max-width: 960px){
          width: 100%;
          text-align:center;
        }
       }
    }
  }
  .home-text {
  position: relative;
  padding-bottom: 300px;
   @media screen and (max-width: 1904px) {
  }
   @media screen and (max-width: 1264px) {
    padding-bottom: 160px;
  }
  @media screen and (max-width: 960px) {
    background-image: none;
    padding-bottom: 100px;
  }
  &::after {
    content: '';
    position: absolute;
    background-image: url(@/assets/img/arrow.png);
    background-size: cover;
    background-position: center;
    bottom: -80px; 
    width: 462px;
    height: 445px;
    left: 50%;
    transform: translateX(-25%);
    z-index: 2;
     @media screen and (max-width: 1264px) {
        width: 300px;
        height: 300px;
        bottom: -80px;
        background-size: 90%;
      }
    
     @media screen and (max-width: 960px) {
      display: none;
    }
  }
  .container {
    @media screen and (max-width: 960px) {
      padding: 0 15px;
    }
  }
  &-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  &-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 31px;
    @media screen and (max-width: 1904px) {
      gap: 15px;
    }
    @media screen and (max-width: 1264px) {
      padding: 0 15px;
      margin-bottom: 35px;
    }
     @media screen and (max-width: 1264px) {
      margin-bottom: 0px;
    }
  }
  &-title {
    font-family: 'Seg-bold';
    font-size: 40px;
    color: #217a73;
    text-align: center;
    @media screen and (max-width: 1904px) {
      font-size: 35px;
    }
    @media screen and (max-width: 960px) {
      font-size: 30px;
    }
  }
  &-descripton {
    font-family: 'Seg';
    font-size: 20px;
    line-height: 32px;
    color: #8a8a8a;
    @media screen and (max-width: 1904px) {
      font-size: 16px;
      line-height: 30px;
    }
    @media screen and (max-width: 960px) {
      font-size: 13px;
      line-height: 25px;
    }
  }
}
}
</style>