<template>
  <div class="contact">
    <ContactIntro/>
    <ContactForm/>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import ContactIntro from '@/components/Contact/ContactIntro.vue';
export default {
  components: {  ContactIntro },
};
</script>

<style></style>
