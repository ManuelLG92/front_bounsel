<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";
import global from "@/global";
import io from "socket.io-client";



@Options({
  provide: {
    global,
  },
  components: {
    Header,
    Footer,
  },
})

/*  setup() {
    const isActive = ref(false);
    const id = ref(0);
    const user = ref("");
    return [isActive, id, user];
  },*/
export default class App extends Vue {}
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
