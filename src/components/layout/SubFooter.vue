<template>
  <div class="sub-footer">
    <div class="container">
      <div class="sub-footer-wrapper">
        <p>
          Copyright @ 2020 PixYz. All Rights Reserved. Designed By Islom Usmonov
        </p>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sub-footer {
  padding: 10px 0;
  background: #ffffff;
   @media screen and (max-width: 600px) {
    }
    .container{
      padding: 0 10px;
    }
  &-wrapper {
    display: flex;
    justify-content: space-between;
  
     @media screen and (max-width: 780px) {
     flex-direction: column;
     justify-content: start;
    }
    p {
      font-family: "Seg";
      font-size: 16px;
      line-height: 21px;
      color: #8a8a8a;
      margin-bottom: 0;
      @media screen and (max-width: 960px) {
        font-size: 13px;
      }
       @media screen and (max-width: 775px) {
        &:not(:last-child) {
          margin-bottom: 15px;
          }
        }
      }
   }
}
</style>