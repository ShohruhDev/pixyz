<template>
  <v-navigation-drawer
    :value="value"
    class="sidebar"
    fixed
    right
    width="450px"
    dark
    @input="$emit('input', $event)"
  >
    <v-card-title class="text-center">
      <v-icon @click="$emit('input', false)">mdi-window-close</v-icon>
    </v-card-title>
    <v-card-title flat class="d-flex flex-column">
      <router-link class="menu" to="/home"> HOME </router-link>

      <router-link class="menu" to="/about"> ABOUT US </router-link>

      <router-link class="menu" to="/service"> SERVICES </router-link>

      <router-link class="menu" to="/portfolio"> PORTFOLIO </router-link>

      <router-link class="menu" to="/contact"> CONTACT </router-link>
      <v-select
        class="language"
        :items="items"
        dense
        item-color="red"
        solo
        label="En"
        background-color="#49d6cb"
        dark
        flat
        filled
      ></v-select>
    </v-card-title>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items :[ 'Uz', 'Ru', 'En']
    }
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  z-index: 99999;
}
.menu{
  font-family: "Seg";
  font-size: 25px;
  color: #fff;
  text-align: center;
  padding-bottom: 20px;
  text-decoration: none;
  &:hover {
    color: #49d6cb;
    font-weight: 900;
    font-size: 27px;
  }
}
.router-link-active {
  font-family: "Seg-bold";
  color: #49d6cb;
}
.language {
  width: 90px;
}

</style>
