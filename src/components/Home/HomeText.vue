<template>
  <div class="home">
    <div class="container">
      <div class="home-wrapper">
        <div class="home-info">
          <h4 class="home-title">How PixYz IT make your life easier</h4>
          <p class="home-text">
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
        <div class="arrow-line">
          <img src="@/assets/img/arrow.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home {
  background-image: url(@/assets/img/pixyz-back.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position-y: -5px;
  position: relative;
  min-height: 100vh;
@media screen and (max-width:960px)  {
   background-image: none;
}
.container {
  @media screen and (max-width:960px)  {
  width: 80%;
}
}


  &-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  &-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 31px;

  @media screen and (max-width:1904px)  {
   gap: 15px;
}
@media screen and (max-width:1264px)  {
      padding: 0 15px;
      margin-bottom: 35px;
}

   
  }

  &-title {
    font-family: "Seg-bold";
    font-size: 40px;
    color: #217a73;
    text-align: center;

 @media screen and (max-width:1904px)  {
         font-size: 35px;
}
@media screen and (max-width:960px)  {
      font-size: 30px;
}

  }

  &-text {
    font-family: "Seg";
    font-size: 20px;
    line-height: 32px;
    color: #8a8a8a;
    text-align: center;

@media screen and (max-width:1904px)  {
  font-size: 16px;
      line-height: 30px;
}
@media screen and (max-width:960px)  {
    font-size: 13px;
      line-height: 25px;
}

  }

  .arrow-line {
    position: absolute;
    top: 50%;
    right: 45%;
    transform: translate(50%, 25%);
    z-index: 2;
    height: 430px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    @media screen and (max-width:1904px)  {
      transform: translate(45%, 35%);
          height: 390px;
    }
    @media screen and (max-width:1264px)  {
          transform: translate(55%, 25%);
          height: 300px;
    }
    @media screen and (max-width:960px)  {
              display: none;
    }
  }
}
</style>
