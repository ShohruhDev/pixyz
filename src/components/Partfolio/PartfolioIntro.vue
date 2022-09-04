<template>
  <div class="portfolio-items">
    <div class="portfolio-header">
      <div class="portfolio-img-wrapper">
        <p class="header-title">Portfolio</p>
      </div>
    </div>
    <div class="container">
      <div class="portfolio-wrapper">
       <PortfolioDetail
        v-for="(detail, idx) in details"
          :key="idx"
          :img-url="detail.imgUrl"
          :title="detail.title" 
       />
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioDetail from './PortfolioDetail.vue';
export default {
  components: { PortfolioDetail },
  data() {
    return {
      details: [
        {
          imgUrl: require("@/assets/img/portfolio-item.png"),
          title: "Business Process Automation",
        },
        {
          imgUrl: require("@/assets/img/portfolio-item.png"),
          title: "Business Process Automation",
        },
        {
         imgUrl: require("@/assets/img/portfolio-item.png"),
          title: "Business Process Automation",
        },
        {
          imgUrl: require("@/assets/img/portfolio-item.png"),
          title: "Business Process Automation",
        },
        {
         imgUrl: require("@/assets/img/portfolio-item.png"),
          title: "Business Process Automation",
        },
        {
          imgUrl: require("@/assets/img/portfolio-item.png"),
          title: "Business Process Automation",
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolio-items {
  padding-top: 71px;

  .portfolio-header {
    background-image: url(@/assets/img/portfolio-img.png);
    background-repeat: no-repeat;
    background-size: cover;

    .portfolio-img-wrapper {
      display: flex;
      position: relative;
      width: 100%;
      height: 380px;
      overflow: hidden;

     @media screen and (max-width:960px)  {
        height: 300px;
      }

      @media screen and (max-width:600px)  {
        height: 250px;
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

      .header-title {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        font-family: "Seg-bold";
        font-size: 40px;
        color: #ffffff;
        z-index: 2;
          @media(max-width: 425px){
          font-size: 35px;
        }
      }
    }
  }

  .portfolio-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 96px 15px 100px 15px;
    gap: 8px;

   @media screen and (max-width:1264px)  {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width:600px)  {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
