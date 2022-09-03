<template>
  <div class="home">
      <HomeIntro />
      <HomeService />
      <HomeWork />
      <HomeTechno />
      <HomeTest />
      <ContactForm />

  </div>
</template>

<script>
import HomeIntro from "../components/Home/HomeIntro.vue";
import HomeService from "../components/Home/HomeService.vue";
import HomeWork from "../components/Home/HomeWork.vue";
import HomeTechno from "../components/Home/HomeTechno.vue";
import HomeTest from "../components/Home/HomeTest.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  components: {
    HomeIntro,
    HomeService,
    HomeWork,
    HomeTechno,
    HomeTest,
    ContactForm,
},
};
</script>

