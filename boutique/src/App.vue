<script setup lang="ts">
import TheHeader from "./components/Header.vue";
import TheFooter from "./components/Footer.vue";
import Boutique from "./features/boutique/Boutique.vue";
</script>

<template>
  <div class="app-container">
    <TheHeader class="header" />
    <div class="app-content">
      <Component :is="Boutique" />
    </div>
    <TheFooter class="footer" />
  </div>
</template>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/debug.scss";

.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "app-content" "footer";
  grid-template-rows: 48px auto 48px;
}

.header {
  grid-area: header;
}

.app-content {
  grid-area: app-content;
}

.footer {
  grid-area: footer;
}
</style>
