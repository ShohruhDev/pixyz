<template>
   <div class="about">
    <div class="about-header">
      <div class="about-img-wrapper">
        <img src="@/assets/img/about-header-img.png" alt="" />
        <p class="about-title">About Us</p>
      </div>
      </div>
      <div class="about-text">
        <div class="container">
          <div class="about-text-wrapper">
         <h4 class="about-text__title">About PixYz Agency</h4>
          <p class="about-text__descripton">
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
              <p class="about-text__descripton">
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
              <p class="about-text__descripton">
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
              <p class="about-text__descripton">
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
</template>


<style lang="scss" scoped>
  .about { 
    margin-top: 80px;
    .container {
    @media screen and (max-width: 960px) {
      padding: 0 15px;
    }
  }
  .about-header {
    .about-img-wrapper {
      display: flex;
      position: relative;

      @media screen and (max-width:600px) {
        height: 20vh;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #217a73;
        opacity: 0.5;
      }

      .about-title {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        font-family: "Seg-bold";
        font-size: 40px;
        color: #ffffff;
        z-index: 2;

        @media screen and (max-width:960px) {
          font-size: 30px;
        }

       @media screen and (max-width:600px) {
          font-size: 28px;
          }
       @media(max-width: 425px){
          font-size: 20px;
          }
        }
      }
    }
  &-text  {
    margin-top: 100px;
    margin-bottom: 100px;  
  .container {
    @media screen and (max-width: 960px) {
      padding: 0 15px;
      }
    }
 &-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
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
   &__title {
    font-family: 'Seg-bold';
    font-size: 40px;
    color: #217a73;
    text-align: center;
    margin-bottom: 30px;
    @media screen and (max-width: 1904px) {
      font-size: 35px;
    }
    @media screen and (max-width: 960px) {
      font-size: 30px;
    }
  }
  &__descripton {
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