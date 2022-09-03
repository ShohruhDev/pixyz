<template>
  <div class="home-techno">
    <div class="container">
      <div class="home-techno-wrapper">
        <div class="techno-title">
          <h5>Specialties and Technologies</h5>
          <p>
            Our stratigists, designers, architectecs, developers and quality
            analysts excel in every technology powering native, hybrid, cross-
            platform and custom software development.
          </p>
          <div class="round-img-wrapper">
            <img src="@/assets/img/round.png" alt="" />
          </div>
        </div>
        <div class="technologies">
          <techno-type
            v-for="(techno, idx) in technos"
            :key="idx"
            :img-url="techno.imgUrl"
            :title="techno.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TechnoType from "./Techno/TechnoType.vue";
export default {
  components: {
    TechnoType,
  },
  data() {
    return {
      technos: [
        { imgUrl: require("@/assets/img/js.svg"), title: "JS" },
        { imgUrl: require("@/assets/img/python.svg"), title: "Python" },
        { imgUrl: require("@/assets/img/ror.svg"), title: "ROR" },
        { imgUrl: require("@/assets/img/spec_13.svg"), title: "Ruby" },
        { imgUrl: require("@/assets/img/mysql.svg"), title: "MySQl" },
        { imgUrl: require("@/assets/img/java.svg"), title: "Java" },
        { imgUrl: require("@/assets/img/java.svg"), title: "Java" },
        { imgUrl: require("@/assets/img/in.svg"), title: "IN" },
        { imgUrl: require("@/assets/img/aws.svg"), title: "AWS" },
        { imgUrl: require("@/assets/img/laravel.svg"), title: "Laravel" },
        { imgUrl: require("@/assets/img/basecamp.svg"), title: "BaseCamp" },
        { imgUrl: require("@/assets/img/xaskell.svg"), title: "Xaskell" },
        { imgUrl: require("@/assets/img/react.svg"), title: "React" },
        { imgUrl: require("@/assets/img/android.svg"), title: "Android" },
        { imgUrl: require("@/assets/img/css.svg"), title: "CSS 3" },
        { imgUrl: require("@/assets/img/js.svg"), title: "JS" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home-techno {
  padding: 100px 0;

   @media screen and (max-width:1904px) {
    padding: 80px 0;
  }

  @media screen and (max-width:1264px){
    padding: 60px 0;
  }
 
  .techno-title {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-bottom: 56px;

    @media screen and (max-width:1904px) {
      gap: 15px;
      margin-bottom: 40px;
    }

    @media screen and (max-width:960px) {
      padding: 0 15px;
    }

    h5 {
      font-family: "Seg-bold";
      font-size: 40px;
      color: #217a73;
      text-align: center;

      @media screen and (max-width:1904px) {
        font-size: 35px;
      }

       @media screen and (max-width:1264px) {
        font-size: 30px;
      }

       @media screen and (max-width:961px) {
        font-size: 25px;
      }

       @media screen and (max-width:600px) {
        font-size: 20px;
      }
    }

    p {
      font-family: "Seg";
      font-size: 24px;
      color: #8a8a8a;
      text-align: center;

       @media screen and (max-width:1904px) {
        font-size: 20px;
      }
       @media screen and (max-width:1264px) {
        font-size: 15px;
      }
    }

    .round-img-wrapper {
      position: absolute;
      top: 10%;
      left: 0;
      transform: translate(-15%);
      z-index: -1;

      @media screen and (max-width:960px) {
        display: none;
      }
    }
  }

  .technologies {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 35.5px;

    @media screen and (max-width:1904px) {
      grid-template-columns: repeat(8, 1fr);
    }

     @media screen and (max-width:1264px) {
      grid-template-columns: repeat(6, 1fr);
    }

     @media screen and (max-width:960px) {
      grid-template-columns: repeat(4, 1fr);
    }

     @media screen and (max-width:600px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    @media screen and (max-width:370px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  .techno-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    height: 120px;
    gap: 10px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    padding: 25px;
    background: #ffffff;

    &:hover {
      border: 1px solid #49d6cb;
      filter: drop-shadow(3px 3px 30px rgba(0, 0, 0, 0.161));

      .name {
        opacity: 1;
      }
    }

    .name {
      font-family: "Seg";
      font-size: 16px;
      color: #7d7d7d;
      opacity: 0;
      white-space: nowrap;
    }
  }
}
</style>
