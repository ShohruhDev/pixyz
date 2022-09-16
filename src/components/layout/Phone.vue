<template>
<router-link to="/contact">
    <div class="icon-phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28.311"
            height="28.311"
            viewBox="0 0 28.311 28.311"
          >
            <path
              id="ic_perm_phone_msg_24px"
              d="M4.573,22.66a17.868,17.868,0,0,0,5.615-.9,1.605,1.605,0,0,1,1.6.377l3.46,3.46A23.709,23.709,0,0,0,25.617,15.252l-3.46-3.476a1.544,1.544,0,0,1-.393-1.589,17.867,17.867,0,0,0,.9-5.615A1.577,1.577,0,0,1,24.233,3h5.5a1.577,1.577,0,0,1,1.573,1.573A26.735,26.735,0,0,1,4.573,31.31,1.577,1.577,0,0,1,3,29.738v-5.5A1.577,1.577,0,0,1,4.573,22.66ZM17.155,3V18.728L12.437,14.01H3V3Z"
              transform="translate(-3 -3)"
              fill="#fff"
            />
          </svg>
        </div>
        </router-link>
</template>
<style lang="scss" scoped>
.icon-phone {
    position: fixed;
    bottom: 32%;
    right: 8%;
    width: 58px;
    height: 58px;
    padding: 17px 15px 15px 20px;
    border-radius: 50%;
    color: rgba(12, 180, 166, 0.35);
    background: #49d6cb;
    box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
    cursor: pointer;
    animation: pulse 1s infinite;
    z-index: 9999;

 @media screen and (max-width:1904px) {
    right: 8%;
 }
 @media screen and (max-width:1264px) {
    right:5%;
 }
 @media screen and (max-width:960px) {
    right:10%;
 }
    svg {
      width: 100%;
      height: 100%;
    }
    @keyframes pulse {
      0% {
        -webkit-box-shadow: 0 0 0 0 rgba(92, 236, 168, 0.4);
      }
      70% {
        -webkit-box-shadow: 0 0 0 10px rgba(79, 226, 185, 0);
      }
      100% {
        -webkit-box-shadow: 0 0 0 0 rgba(89, 230, 199, 0);
      }
    }

    @keyframes pulse {
      0% {
        -moz-box-shadow: 0 0 0 0 rgba(120, 228, 194, 0.4);
        box-shadow: 0 0 0 0 rgba(36, 211, 191, 0.4);
      }
      70% {
        -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
        box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      }
      100% {
        -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      }
    }
  }
</style> 