<template>
  <v-app>
    <div class="default-layout">
      <div class="layout-header">
        <Navbar @sidebar:update="drawer = !drawer" />
        <Sidebar v-model="drawer" />
      </div>
      <div class="layout-page">
        <router-view />
      </div>
      <div class="layout-footer">
        <Footer/>
        <SubFooter/>
      </div>
    </div>
    <div class="layout-phone">
      <Phone/>
    </div>
  </v-app>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import SubFooter from './components/layout/SubFooter.vue';
import Sidebar from "@/components/layout/Sidebar.vue";
import Phone from './components/layout/Phone.vue';

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    Footer,
    SubFooter,
    Phone
},
  data() {
    return {
      drawer: false
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
