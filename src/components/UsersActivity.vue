<template>
  <Layout>
    <template v-slot:content>
      <h1 class="text-center">Activity</h1>
      <div class="row">
        <div class="col">
          <h2>Users</h2>
        </div>
        <div class="col">
          Records
        </div>

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
