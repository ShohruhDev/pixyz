<template>
  <div class="home-test">
    <div class="container">
      <div class="home-test-wrapper">
        <v-carousel
          v-model="currentSlide"
          :show-arrows="$vuetify.breakpoint.smAndUp"
          hide-delimiters
          cycle
          next-icon
          prev-icon
        >
          <v-carousel-item v-for="slide in sliders" :key="slide.name">
         <h5 class="feedback-title">Customer Testimonials</h5>
            <div class="feedback-body-wrapper">
              <div class="feedback-quote-up">
                <img src="@/assets/img/quote.png" alt="" />
              </div>
              <div class="feedback-body">
                <p>
                  {{ slide.description }}
                </p>
                <div class="feedback-info">
                  <div class="info-img">
                    <img :src="slide.imgUrl" alt="" />
                  </div>
                  <div class="bio">
                    <h6 class="name">{{ slide.name }}</h6>
                    <p class="type">{{ slide.company }}</p>
                  </div>
                </div>
              </div>
              <div class="feedback-quote-down">
                <img src="@/assets/img/quote-down.png" alt="" />
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>

        <div class="home-slider-dots">
          <div
            v-for="(dot, index) in sliders"
            :key="dot.name"
            class="home-slider__dot"
            @click="currentSlide = index"
          >
            <svg v-if="currentSlide !== index" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
              <g id="Эллипс_94" data-name="Эллипс 94" fill="#fff" stroke="#49d6cb" stroke-width="1">
                <circle cx="4" cy="4" r="4" stroke="none"/>
                <circle cx="4" cy="4" r="3.5" fill="none"/>
              </g>
            </svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
              <g id="Эллипс_92" data-name="Эллипс 92" fill="#49d6cb" stroke="#49d6cb" stroke-width="1">
                <circle cx="6" cy="6" r="6" stroke="none"/>
                <circle cx="6" cy="6" r="5.5" fill="none"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: [
        {
          description: `In promotion and advertising, a testimonial or show consists
                  of a person's written or spoken statement extolling the virtue
                  of a product. The term "testimonial" most commonly applies to
                  the sales-pitches attributed to ordinary citizens, whereas the
                  word "endorsement" usually applies to pitches by celebrities.
                  Testimonials can be part of communal marketing. Sometimes, the
                  cartoon character can be a testimonial in a commercial`,
          imgUrl: require("@/assets/img/woman.svg"),
          name: "Shohrux Burxonov 1",
          company: "CEO Google",
        },
        {
          description: `In promotion and advertising, a testimonial or show consists
                      of a person's written or spoken statement extolling the virtue
                      of a product. The term "testimonial" most commonly applies to
                      the sales-pitches attributed to ordinary citizens, whereas the
                      word "endorsement" usually applies to pitches by celebrities.
                      Testimonials can be part of communal marketing. Sometimes, the
                      cartoon character can be a testimonial in a commercial`,
          imgUrl: require("@/assets/img/woman.svg"),
          name: "Shohrux Burxonov 2",
          company: "CEO Amazon",
        },
        {
          description: `In promotion and advertising, a testimonial or show consists
                    of a person's written or spoken statement extolling the virtue
                    of a product. The term "testimonial" most commonly applies to
                    the sales-pitches attributed to ordinary citizens, whereas the
                    word "endorsement" usually applies to pitches by celebrities.
                    Testimonials can be part of communal marketing. Sometimes, the
                    cartoon character can be a testimonial in a commercial`,
          imgUrl: require("@/assets/img/woman.svg"),
          name: "Shohrux Burxonov 3",
          company: "CEO Apple",
        },
        {
          description: `In promotion and advertising, a testimonial or show consists
                    of a person's written or spoken statement extolling the virtue
                    of a product. The term "testimonial" most commonly applies to
                    the sales-pitches attributed to ordinary citizens, whereas the
                    word "endorsement" usually applies to pitches by celebrities.
                    Testimonials can be part of communal marketing. Sometimes, the
                    cartoon character can be a testimonial in a commercial`,
          imgUrl: require("@/assets/img/woman.svg"),
          name: "Shohrux Burxonov 4",
          company: "CEO Apple",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.home-test {
  padding: 92px 0 90px 0;
  margin-bottom: 100px;
  background: #f4f6fc;
    @media screen and (max-width: 960px) {
      padding: 30px 0;
    }
   .container {
    @media screen and (max-width: 960px) {
      padding: 0 15px;
    }
  }
  .v-window,
  .v-window-item,
  .v-window__container-is-active,
  .v-responsive {
    overflow: visible !important;
    align-items: center !important;
  }

  @media screen and (max-width: 1904px) {
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
  }

  .feedback-body-wrapper {
    position: relative;
  }

  .feedback-quote-up {
    position: absolute;
    top: 0px;
    left: 15%;
    z-index: 9999999;

    @media screen and (max-width: 1904px) {
      left: 10%;
      top: 0px;
    }

    @media screen and (max-width: 1264px) {
      display: none;
    }
  }

  .feedback-quote-down {
    position: absolute;
    right: 15%;
    bottom: 100px;

    @media screen and (max-width: 1904px) {
      right: 10%;
      bottom: 35%;
    }

    @media screen and (max-width: 1264px) {
      display: none;
    }
  }

  .feedback-title {
    font-family: "Seg-bold";
    font-size: 40px;
    color: #217a73;
    text-align: center;
    margin-bottom: 40px;

    @media screen and (max-width: 1904px) {
      font-size: 35px;
    }
    @media screen and (max-width: 1264px) {
      font-size: 30px;
    }

    @media screen and (max-width: 960px) {
      font-size: 25px;
    }

    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }

  .feedback-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    @media screen and (max-width: 1264px) {
      gap: 40px;
    }

    @media screen and (max-width: 960px) {
      gap: 30px;
    }

    p {
      font-family: "Seg";
      font-size: 24px;
      line-height: 32px;
      color: #7d7d7d;
      text-align: center;
      width: 50%;

      @media screen and (max-width: 1904px) {
        font-size: 20px;
      }

      @media screen and (max-width: 1264px) {
        width: 60%;
      }

      @media screen and (max-width: 960px) {
        width: 100%;
      }

      @media screen and (max-width: 600px) {
        font-size: 15px;
        line-height: 25px;
      }
    }
  }

  .feedback-info {
    display: flex;
    align-items: center;  
    gap: 10px;
  }

  .info-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .bio {
    display: flex;
    flex-direction: column;
    padding-top: 10px;

    .name {
      font-family: "Seg-bold";
      font-size: 16px;
      color: #49d6cb;
    }

    .type {
      font-family: "Seg";
      font-size: 16px;
      color: #000000;
      white-space: nowrap;
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home-slider {
    &-dots {
      display: flex;
      align-items: center;
      gap: 5px;
      align-self: center;
    }

    &__dot {
      display: flex;
      align-items: center;
    }
  }
}
</style>
