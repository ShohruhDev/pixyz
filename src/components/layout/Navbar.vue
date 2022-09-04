<template>
  <div class="navbar change_color">
    <div class="container">
      <div class="navbar-wrapper">
        <div class="burger-wrapper">
          <v-app-bar-nav-icon @click="$emit('sidebar:update')" />

        </div>
        <div class="logo-wrapper">
          <img @click="$router.push('/')" src="@/assets/img/logo.png" alt="" />
        </div>
        <div class="menu-wrapper">
          <router-link class="menu" to="/home" exact-active-class="active">
            HOME
          </router-link>

          <router-link class="menu" to="/about" exact-active-class="active">
            ABOUT US
          </router-link>

          <router-link class="menu" to="/service" exact-active-class="active">
            SERVICES
          </router-link>

          <router-link class="menu" to="/portfolio" exact-active-class="active">
            PORTFOLIO
          </router-link>

          <router-link class="menu" to="/contact" exact-active-class="active">
            CONTACT
          </router-link>
          <v-select
            class="language"
            v-model="language"
            :items="items"
            item-color="red"
            dense
            solo
            flat
            hide-details
          ></v-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data()  {
    return {
      items :[ 'Uz', 'Ru', 'En'],
      drawer:false,
      language: 'Uz'
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  right: 0;
  left: 0;
  background: transparent;
  z-index: 11111;
 
  
  &-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
  
    @media screen and (max-width:960px)  {
      flex-direction: row-reverse;
      align-items: center;
    }
  }

  .burger-wrapper {
    display: none;

    @media screen and (max-width:960px)  {
      display: block;
    }
  }

  .logo-wrapper {
    padding: 10px 0;
    height: 70px;
    cursor: pointer;
     

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;  
    }
  }

  .menu-wrapper {
    display: flex;
    gap: 52px;
     @media screen and (max-width: 992px)  {
     gap: 40px;
    }
    @media screen and (max-width:960px)  {
      display: none;
    }
  }
  .menu {
    display: flex;
    align-items: center;
    font-weight: 200;
    font-size: 11px;
    color: #000000;
    text-align: center;
    text-decoration: none;
    position: relative;
       @media screen and (max-width:1264px)  {
       font-size: 10px;
    }
        @media screen and (max-width:992px)  {
      font-size: 9px;
    }
    &::before {
      display: block;
      content: attr(title);
      font-weight: bold;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }

    &:hover {
      color: #49d6cb;
      transition: all 0.3s;
    }

    &::after {
      content: "";
      position: absolute;
      right: 50%;
      left: 50%;
      bottom: 0;
      height: 3px;
      background-color: #49d6cb;
      transition: all 0.3s;
    }

    &:hover::after {
      right: -40%;
      left: -40%;
      transition: all 0.3s;
    }

    &.active {
      color: #49d6cb;
    }
  }

  .language {
    display: flex;
    align-items: center;
    width: 90px;
  }
}
</style>
