<template>
  <div class="portfolio-detail">
    <div class="detail-img">
      <img :src="imgUrl" alt="" />
      <h6 class="detail-title">{{ title }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio-detail {
  width: 100%;

  .detail-img {
    position: relative;
    width: 100%;
    height: 435px;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;

      &:hover {
        img {
          transform: scale(1.2);
        }
      }
 

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: #000;
      opacity: 0.2;
      z-index: 1;
    }
    .detail-title {
      opacity: 1;
    }

    &:hover {
      &::after {
        opacity: 0.5;
        transition: all 0.3s;
      }

    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      // transition: .5s;
      transition: 1s;
      display: block;

      &:hover {
        transform: scale(1.5);
      }
    }
  }


  .detail-title {
    font-family: "Arial";
    font-size: 24px;
    color: #ffffff;
    position: absolute;
    white-space: nowrap;
    top: 50%;
    right: 50%;
    transform: translate(50%, -10%);
    z-index: 2;
    opacity: 0;

   @media screen and (max-width:1264px) {
 font-size: 20px;
   }
   @media screen and (max-width:960px) {
   font-size: 15px;
   }
   
  }
}
</style>
