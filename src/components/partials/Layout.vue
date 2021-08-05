<template>
  <div class="body">
    <Header />
    <div class="container main">
      <slot name="content"> </slot>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import global from "@/global";
import io from "socket.io-client";

export default defineComponent({
  name: "Layout",
  components: {
    Header,
    Footer,
  },
});
</script>

<style scoped>
.main {
  flex: 1;
}
.body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

}
</style>