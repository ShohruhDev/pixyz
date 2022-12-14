<template>
  <div class="work">
    <div class="container">
      <div class="title">
        <h2>How We Work?</h2>
      </div>
      <div class="work-items">
        <div class="work-item first">
          <div class="work-item-info">
            <h3>First discussion</h3>
            <p>
               The first step is to give an overview of the problem we want to solve and / or our needs. If the needs are not properly understood, this will cause the creation of a web application that is designed for these purposes to fail.
            </p>
          </div>
        </div>
        <div class="work-item second">
          <div class="work-item-info right">
            <h3>Requirements analysis</h3>
            <p>
              The goal was to define the goals for implementing the web application. Tasks can be complex, and business logic is often quite complex. At this stage, it is important that these complex tasks can be broken down into more manageable tasks and, therefore, they are easier to implement, verify, and test.
            </p>
          </div>
        </div>
        <div class="work-item third">
          <div class="work-item-info">
            <h3>Timeline and Cost Estimation</h3>
            <p>
              Experience is a good ally when it comes to making the right assessment. If a
              similar task was completed earlier, it becomes easier to give an accurate
              estimate, and time tracking becomes our recommendation. From the previous
              step, we can collect all the pieces that we are going to collect from end to
              end. For each task, we analyze its complexity and make a classification.
            </p>
          </div>
        </div>
      </div>
      <div class="btn-wrapper">
        <router-link class="step" to="/about"> Full Steps</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .work {
   .container {
    @media screen and (max-width: 960px) {
      padding: 0 15px;
    }
  }
    .title{
      padding-top: 120px;
      text-align: center;
      position: relative;
      h2{
        font-weight: 700;
        font-size: 40px;
        line-height: 53px;
        color: #217a73;
        @media(max-width: 600px){
          line-height: 0;
          font-size: 30px;
        }
      }
      &::after {
        content: "";
        position: absolute;
        top: 180px;
        left: 51%;
        margin-left: -114px;
        background: url(@/assets/img/work-arrow.png) no-repeat center/cover;
        width: 298px;
        height: 172px;
        @media (max-width: 1500px) {
          top: 130px;
          width: 250px;
          height: 150px;
        }
        @media (max-width: 960px) {
          display: none;
        }
      }
    }
    &-items {
      margin-top: 100px;
      .first {
        background: url(@/assets/img/work-image.png) no-repeat left 130px center;
        @media (max-width: 1904px) {
          min-height: 400px;
          background-size: 35%;
        }
        @media (max-width: 960px) {
          background-size: 300px;
          min-height: auto;
          padding-top: 290px;
          background-position: top center !important;
        }
        @media(max-width: 425px){
          background-size: 250px;
          padding-top: 250px;
        }
      }
      .second {
        background-image: url(@/assets/img/work-image-2.png);
        background-position: right 50px  center;
        @media (max-width: 1904px) {
          min-height: 400px;
          background-size: 35%;
        }
        @media (max-width: 960px) {
          background-size: 300px;
          padding-top: 210px;
          background-position: top center !important;
        }
        @media(max-width: 425px){
          background-size: 250px;
          padding-top: 150px;
        }
      }
      .third {
        background: url(@/assets/img/work-image-3.png) no-repeat left 110px center ;
        @media (max-width: 1904px) {
          background-size: 35%;
        }
        @media (max-width: 960px) {
          background-size: 300px;
          padding-top: 380px;
          background-position: top center !important;
        }
        @media(max-width: 425px){
          background-size: 250px;
          padding-top: 350px;
        }
      }
      .work-item {
        display: flex;
        align-items: center;
        min-height: 450px;
        position: relative;
        &:not(:last-child) {
          margin-bottom: 160px;
          @media (max-width: 960px) {
            margin-bottom: 60px;
          }
          @media(max-width: 600px){
            margin-bottom: 20px;
          }
          @media(max-width:425px){
            margin-bottom: 10px;
          }
        }

        &-info {
          margin-left: 47.9%;
            @media (max-width: 960px) {
              padding-top: 10px;
              text-align: center;
              margin: 0 auto;
              width: 600px;
            }
            @media(max-width: 600px){
              width: 100%;
            }
          h3 {
            font-weight: 700;
            font-size: 30px;
            line-height: 100px;
            color: #217a73;
            margin-top:20px;
            @media(max-width:600px){
              font-size: 24px;
              line-height: 32px;
              margin-bottom: 10px;
            }
            @media(max-width: 425px){
              font-size: 22px;
              line-height: 1.4;
            }
          }
          p {
            color: #8a8a8a;
            font-size: 22px;
            line-height: 40px;
            @media(max-width:600px){
              font-size: 16px;
              line-height: 32px;
            }
            @media(max-width: 425px){
              font-size: 14px;
              line-height: 1.4;
            }
          }
        }
        .right {
          margin-right: 50%;
          margin-left: 0;
          @media (max-width: 960px) {
            text-align: center;
            margin: 0 auto;
            width: 600px;
          }
        }
        &:first-child:after {
          content: "";
          position: absolute;
          width: 1209px;
          height: 350px;
          background: url(@/assets/img/arrow-down.png) no-repeat center/cover;
          bottom: -240px;
          right: 80px;
          @media (max-width: 1904px) {
            right: -10px;
            bottom: -260px;
            background-size: 80%;
          }
            @media (max-width:1500px) {
              right: -180px;
              background-size: 60%
          }
          @media (max-width: 960px) {
            display: none;
          }
        }
        &:nth-child(2)::after {
          content: "";
          position: absolute;
          width: 601px;
          height: 302px;
          background: url(@/assets/img/arrow-down-2.png) no-repeat center/cover;
          bottom: -240px;
          right: 140px;
          @media (max-width:1904px) {
            right: 0;
            bottom: -180px;
          }
            @media (max-width:1500px) {
              right: -100px;
              background-size: 80%;
          }
          @media (max-width: 960px) {
            display: none;
          }
        }
        &:nth-child(3)::after {
          content: "";
          position: absolute;
          width: 748px;
          height: 176px;
          background: url(@/assets/img/arrow-down-3.png) no-repeat;
          bottom: -120px;
          right: -40px;
          @media (max-width:1904px) {
            background-size: 80%;
            right: -145px;
            bottom: -155px;
          }
            @media (max-width:1500px) {
            background-size: 70%;
            right: -255px;
            bottom: -175px;
          }
          @media (max-width: 960px) {
            display: none;
          }
        }
      }
    }
    .btn-wrapper {
      text-align: center;
      margin-top: 135px;
       @media (max-width:900px) {
        margin-top: 50px;
      }
      @media (max-width:600px) {
        margin-top: 40px;
      }
      .step {
        font-family: "Arial";
        font-size: 16px;
        padding: 15px 52px;
        color: #ffffff;
        background: #49d6cb;
        border: 1px solid #49d6cb;
        border-radius: 5px;
        text-decoration: none;
        text-transform: uppercase;
        transition: all 0.3s;
        
      @media (max-width:900px) {
        padding: 10px 30px;
      }
     
        &:hover {
          color: #49d6cb;
          background: #ffffff;
        }
      }
    }
  }
</style>
