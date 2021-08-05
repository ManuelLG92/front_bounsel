<template>
  <Layout>
    <template v-slot:content>
      <div class="row mt-5">
        <div class="col-8 mx-auto shadow-lg">
          <div class="main-page-content pt-5 pb-5 ps-2 pr-2">
            <h1 class="text-primary mb-3">Welcome I'm Manuel Leon.</h1>
            <h2 class="mb-5">
              This is the front end to consume the api that records the
              time of the user from they're connected until them logout or close the tab.
            </h2>
            <h5 class="mb-3">
              I'll communicate this front end with the api through events using
              websocket but it could be
              done using redis, RabbitMQ, Kafka, or other message broker.
              As you said it couldn't be done by a http request to the api.
            </h5>
            <h5>
              I'll send all instructions on the task delivery, over-more I'll add an
              readme with the concerning information
            </h5>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/partials/Layout.vue";

export default defineComponent({
  name: "Main",
  components: {
    Layout,
  },
  inject: ["global"],
});
</script>

<style scoped>
.main-page-content {
  border-radius: 15px;
}
</style>
