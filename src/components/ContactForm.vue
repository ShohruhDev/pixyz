<template>
  <div class="contact-form" >
    <div class="container">
      <div class="contact-form-wrapper">
        <div class="main-wrapper">
          <form class="get-touch-body">
            <h5 class="get-touch-title">Get ln Touch</h5>
            <div class="input-wrapper">
              <input type="text" placeholder="Name" hide-details />
              <input type="text" placeholder="Last Name" hide-details />
            </div>
            <div class="input-wrapper">
              <input type="email" placeholder="Email" hide-details />
              <input type="tel" placeholder="Phone/Telegram" hide-details />
            </div>
            <div class="input-wrapper">
              <v-select
                class="select"
                flat
                placeholder="I am interested in"
                :items="selects"
                solo
                hide-details
              ></v-select>
              <v-select
                class="select"
                flat
                :items="items"
                placeholder="Select Project Budget in USD"
                solo
                hide-details
              ></v-select>
            </div>
            <div class="area-wrapper">
              <textarea
                class="area"
                cols="90"
                rows="6"
                placeholder="About your Project"
              ></textarea>
            </div>
            <div class="btn-wrapper">
              <button class="submit" type="submit">Submit</button>
            </div>
          </form>
          <div class="get-touch-contact">
            <div class="contact-infos">
              <h6 class="title-form">Say Hi!</h6>
              <a class="mail" href="#">info@pixyz.com</a>
              <a class="tel" href="#">+998 71 645 57 67</a>
              <a class="telegram" href="#">Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ["100$", "500$", "1000$"],
    selects: ["Accaunting", "IT", "Marketing"],
  }),
};
</script>

<style lang="scss" scoped>
.contact-form {
  padding-bottom: 110px;
.container {
  width: 73%;
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    filter: drop-shadow(3px 3px 30px rgba(0, 0, 0, 0.161));

    @media screen and (max-width: 1264px) {
      padding: 0 15px;
    }
  }
  .main-wrapper {
    display: flex;
  }
  .get-touch-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 70px 50px 10px 75px;
    &:not(:last-child) {
      gap: 25px;
    }

    @media screen and (max-width: 960px) {
      padding: 30px;
    }
  }

  .get-touch-title {
    font-family: "Seg-bold";
    color: #217a73;
    font-weight: 700;
    font-size: 32px;
    line-height: 43px;
    text-align: start;
    margin-top: -15px;

    @media screen and (max-width: 1264px) {
      font-size: 29px;
    }
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 25px;

    @media screen and (max-width: 1264px) {
      flex-direction: column;
      gap: 20px;
    }

    &.select {
      @media screen and (max-width: 1904px) {
        display: flex;
        flex-direction: column;
      }
    }

    .select {
      font-family: "Arial";
      font-size: 16px;
      border: 1px solid #49d6cb;
      width: 100%;
      color: #c9c9c9;
       padding: 0px 0;
       @media screen and (max-width: 1264px) {
        width: 90%;
      }
    }

    input {
      font-family: "Arial";
      font-size: 16px;
      padding: 15px 45px 15px 28px;
      border: 1px solid #49d6cb;
      width: 90%;

      @media screen and (max-width: 1264px) {
        font-size: 15px;
        padding: 10px 30px 15px 15px;
      }

      &:focus {
        outline: none !important;
        border: 1px solid #ff8888;
      }

      &::placeholder {
        color: #c9c9c9;
      }
    }
  }

  .area {
    font-family: "Arial";
    font-size: 16px;
    border: 1px solid #49d6cb;
    width: 99%;
    padding: 5px 25px;
    color: #c9c9c9;
      @media screen and (max-width: 1264px) {
       width: 90%;
       margin-left: 37px;
      }

    &:focus {
      outline: none !important;
      border: 1px solid #ff8888;
    }

    &::-webkit-input-placeholder {
      color: #c9c9c9;
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 30px;
    padding-top: 18px;
  }

  .submit {
    font-family: "Seg";
    font-size: 16px;
    padding: 8px 60px;
    color: #ffffff;
    background: #49d6cb;
    border: 1px solid #49d6cb;
    cursor: pointer;

    &:hover {
      color: #49d6cb;
      background: #ffffff;
    }
  }

  .get-touch-contact {
    display: flex;
    width: 510px;
    position: relative;
    background: url(@/assets/img/get-touch.png) no-repeat top 115px right 26px, #49D6CB;
   
    @media screen and (max-width: 1264px) {
      display: none;
    }

    .contact-infos {
      position: absolute;
      top: 8%;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      

      @media screen and (max-width: 1904px) {
      position: absolute;
      top: 89%;
      right: 100px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      }

      a {
        font-family: "Seg";
        text-decoration: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        color: #ffffff;

        &:not(:last-child) {
          margin-bottom: 60px;
        }

        @media screen and (max-width: 1904px) {
          position: absolute;
          margin-bottom: 0 !important;
        }
      }

      .title-form {
        font-family: "Seg-bold";
        font-weight: 700;
        font-size: 32px;
        line-height: 43px;
        color: #ffffff;
        margin-bottom: 40px;
        transform: translateY(-40%);
        transform: translateX(47%);
        @media screen and (max-width: 1904px) {
          position: absolute;
          bottom: 480px;
          left: 70px;
          transform: translate(0);
          margin-bottom: 0;
        }
      }

      .mail {
        transform: translateY(10%);
        transform: translateX(50%);

          @media screen and (max-width: 1904px) {
            bottom: 430px;
            left: 10px;
          }
        }

      .tel {
        transform: translateY(30%);
        transform: translateX(58%);

        @media screen and (max-width: 1904px) {
          bottom: 350px;
          left: 65px;
          transform: translateX(0);
        }
      }

      .telegram {
        transform: translateY(100%);
         transform: translateX(15%);

          @media screen and (max-width: 1904px) {
          bottom: 270px;
          left: 70px;
        }
      }
    }
  }
}
</style>
