<template>
  <div class="bg-dark">
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark container">
      <div class="container-fluid">
        <router-link
          class="text-decoration-none fw-bold"
          :to="{ name: 'main' }"
        >
          <span class="navbar-brand">Journal record</span>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link
              class="text-decoration-none"
              :to="{ name: 'users-activity' }"
            >
              <li class="nav-item">
                <span class="nav-link active">Users record</span>
              </li>
            </router-link>
          </ul>
          <div>
            <div v-if="!this.global.getIsActive()">
              <!--              <RouterLink :to="{ name: 'login' }">-->
              <button
                class="btn btn-info ms-3 me-3"
                @click="this.startRecord()"
              >
                Start Record
              </button>
              <!--              </RouterLink>-->
            </div>
            <div v-else class="me-5">
              <button
                class="btn btn-info ms-3 me-3"
                @click="this.stopRecord()"
              >
                Stop Record
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import io from "socket.io-client";
import global from "@/global";

let socketIo = io();

export default defineComponent({
  name: "Header",
  components: {},
  inject: ["global"],
  methods: {
    startRecord() {
      global.setIsActive(true);
      console.log(global.getIsActive());
      socketIo = io("http://localhost:3005");

      socketIo.on("connect", () => {
        console.log("SOCKET CONNECTED!", socketIo.id);
      });
    },
    stopRecord() {
      global.setIsActive(false);
      socketIo.disconnect();
    },
  },
});
</script>
