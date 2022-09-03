<template>
  <div class="about">
    <div class="about-header">
      <div class="about-img-wrapper">
        <img src="@/assets/img/about-header-img.png" alt="" />
        <p class="about-title">How we work</p>
      </div>
      </div>
         <div class="work">
    <div class="container">
      <div class="title">
        <h2>About Pixyz Agency</h2>
      </div>
      <div class="work-items">
        <div class="work-item first">
          <div class="work-item-info">
            <h3>First discussion</h3>
            <p>
              The goal was to define the goals for implementing the software. Tasks can be
              complex, and business logic is often quite complex. At this stage, it is
              important that these complex tasks can be broken down into more manageable
              tasks and, therefore, they are easier to implement, verify and test.
            </p>
          </div>
        </div>
        <div class="work-item second">
          <div class="work-item-info right">
            <h3>Requirements analysis</h3>
            <p>
              The goal was to define the goals for implementing the web application. Tasks
              can be complex, and business logic is often quite complex. At this stage, it
              is important that these complex tasks can be broken down into more
              manageable tasks and, therefore, they are easier to implement, verify, and
              test.
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
          <div class="work-item forth">
          <div class="work-item-info right">
            <h3>The design, Conception, and planing</h3>
            <p>
              The evaluation gives us an idea of the time required to 
              complete the entire project. At this stage, our goal is to answer 
              the following questions: who does what and when? What is the 
              best technical approach?
            </p>
          </div>
        </div>
          <div class="work-item fiveth">
          <div class="work-item-info">
            <h3>The development</h3>
            <p>
               This is the most famous step. Once the product requirements 
              document is installed, the development phase can begin. The 
              goal of this stage is to create an application that meets the 
              needs identified in previous stages, and since needs tend to 
              evolve and new implementation ideas may arise during the 
              implementation stage, it is usually recommended to use a 
              methodology that provides flexibility and proactivity.

            </p>
          </div>
        </div>
          <div class="work-item sixth">
          <div class="work-item-info right">
            <h3>The testing phase</h3>
            <p>
              This stage is also called the user acceptance test. At this stage, 
              the test group of users checks the feature set and reports 
              errors, if any. if there are any changes, you can discuss them 
              with the project Manager, who will advise you on the best way 
              to account for input data and feedback.
            </p>
          </div>
        </div>
            <div class="work-item seventh">
          <div class="work-item-info ">
            <h3>The deployment and post-production phase</h3>
            <p>
                After each feature in a given release has been checked and all 
                error messages have been fixed, the deployment stage may 
                begin, this may be the first launch or deployment of a new 
                release, this is the moment when the web application will work 
                in its real environment.
                Some behaviors only appear in the production environment, 
                such as performance load balancer.it is important to set aside 
                time for support and maintenance to fix any errors or 
                performance issues found after the application is launched.

                New ideas for expansion may appear as soon as the app is up 
                and running, the post-production phase is the best time to 
                discuss other needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {};
</script>



<style lang="scss" scoped>
  
  .about { 
    margin-top: 80px;
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
        }
      }
    }
      .work {
    .container {
      @media (min-width: 1500px) {
        width: 1466px;
        padding-right: 15px;
        padding-left: 15px;
      }
    }
    .title{
      padding-top: 84px;
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
        top: 140px;
        left: 52%;
        margin-left: -114px;
        background: url(@/assets/img/work-arrow.png) no-repeat center/cover;
        width: 288px;
        height: 172px;

        //  @media (max-width:1904px) {

        //        }
        @media (max-width: 1264px) {
          top: 120px;
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
        background: url(@/assets/img/work-image.png) no-repeat left 100px center;
        @media (max-width: 1904px) {
          min-height: 400px;
          background-size: 35%;
        }
        @media (max-width: 960px) {
          background-size: 300px;
          min-height: auto;
          padding-top: 300px;
          background-position: top center !important;
        }
        @media(max-width: 425px){
          background-size: 250px;
          padding-top: 230px;
        }
      }
      .second {
        background-image: url(@/assets/img/work-image-2.png);
        background-position: right 100px center;
        @media (max-width: 1904px) {
          min-height: 400px;
          background-size: 35%;
        }
        @media (max-width: 960px) {
          background-size: 300px;
          padding-top: 200px;
          background-position: top center !important;
        }
        @media(max-width: 425px){
          background-size: 250px;
          padding-top: 120px;
        }
      }
      .third {
        background: url(@/assets/img/work-image-3.png) no-repeat left 100px center;
        @media (max-width: 1904px) {
          background-size: 35%;
        }
        @media (max-width: 960px) {
          background-size: 300px;
          padding-top: 400px;
          background-position: top center !important;
        }
        @media(max-width: 425px){
          background-size: 250px;
          padding-top: 350px;
        }
      }
       .forth {
        background-image: url(@/assets/img/about-img.png);
        background-position: right 100px center;
        @media (max-width: 1904px) {
          min-height: 400px;
          background-size: 35%;
        }
        @media (max-width: 960px) {
          background-size: 300px;
          padding-top: 300px;
          background-position: top center !important;
        }
        @media(max-width: 425px){
          background-size: 250px;
          padding-top: 200px;
        }
      }
           .fiveth {
        background: url(@/assets/img/about-img-1.png) no-repeat left 100px center;
        @media (max-width: 1904px) {
          background-size: 35%;
        }
        @media (max-width: 960px) {
          background-size: 300px;
          padding-top: 300px;
          background-position: top center !important;
        }
        @media(max-width: 425px){
          background-size: 250px;
          padding-top: 220px;
        }
      }
           .sixth {
        background-image: url(@/assets/img/about-img-2.png);
        background-position: right 100px center;
        @media (max-width: 1904px) {
          min-height: 400px;
          background-size: 35%;
        }
        @media (max-width: 960px) {
          background-size: 300px;
          padding-top: 300px;
          background-position: top center !important;
        }
        @media(max-width: 425px){
          background-size: 250px;
          padding-top: 190px;
        }
      }
      .seventh {
           background-image: url(@/assets/img/about-img-3.png);
        background-position: left 100px start;
        @media (max-width: 1904px) {
          min-height: 400px;
          background-size: 35%;
        }
        @media (max-width: 960px) {
          background-size: 300px;
          padding-top: 500px;
          background-position: top center !important;
        }
        @media(max-width: 425px){
          background-size: 250px;
          padding-top: 400px;
        }
      }
      .work-item {
        display: flex;
        align-items: center;
        min-height: 450px;
        position: relative;
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

        &-info {
          margin-left: 50%;
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
            font-size: 32px;
            line-height: 43px;
            color: #217a73;
            margin-bottom: 35px;
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
          right: 150px;
          @media (max-width: 1904px) {
            right: -10px;
            bottom: -260px;
            background-size: 80%;
          }
            @media (max-width:1264px) {
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
          bottom: -195px;
          right: 160px;
          @media (max-width:1904px) {
            right: 0;
            bottom: -180px;
          }
            @media (max-width:1264px) {
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
            width: 100%;
            height: 100%;
            top: 300px;
            left: 5px;
            background: url(@/assets/img/third.png) no-repeat;
            @media (max-width:1904px) {
              top: 380px;
              background-size: 90%;
            }
              @media (max-width:1264px) {
              background-size: 100%;
              top: 445px;
            }
            @media (max-width: 960px) {
              display: none;
            }
          }
        &:nth-child(4)::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 370px;
          left: 300px;
          
          background: url(@/assets/img/fourth.png) no-repeat;
         
          @media (max-width:1904px) {
            top: 325px;
            left: 150px;
            background-size: 80%;
           
          }
            @media (max-width:1264px) {
              top: 385px;
              left: 180px;
            
          }
          @media (max-width: 960px) {
            display: none;
          }
        }
        &:nth-child(5)::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: url(@/assets/img/fiveth.png) no-repeat;
          bottom: -380px;
          left: 20px;
          @media (max-width:1904px) {
          bottom: -360px;
          }
            @media (max-width:1264px) {
            background-size: 90%;
            bottom: -460px;
         
          }
          @media (max-width: 960px) {
            display: none;
          }
        }
            &:nth-child(6)::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: url(@/assets/img/sixth.png) no-repeat;
          bottom: -250px;
          left: 490px;
          @media (max-width:1904px) {
            background-size: 17%;
            bottom: -300px;
            left: 380px;
         
          }
            @media (max-width:1264px) {
          bottom: -380px;
          left: 280px;
          }
          @media (max-width: 960px) {
            display: none;
          }
        }
       
      }
    }
   
  }
  }
</style>