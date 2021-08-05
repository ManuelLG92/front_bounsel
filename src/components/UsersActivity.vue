<template>
  <Layout>
    <template v-slot:content>
      <div>
        <h1>Activity</h1>
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/partials/Layout.vue";

export default defineComponent({
  name: "UsersActivity",
  components: {
    Layout,
  },
  inject: ["global"],
});
</script>
