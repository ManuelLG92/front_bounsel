<template>
  <Layout>
    <template v-slot:content>
      <div class="row bg-white shadow-lg rounded p-3 mt-5">
        <h1 class="text-center">Users activity</h1>
        <hr />
        <div class="row">
          <div class="col-md-6 mt-2">
            <h3 class="text-center">Select User</h3>
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select"
                v-model="userIdToSearch"
              >
                <option v-for="user in users" :key="user.id" :value="user.id">
                  {{ user.name }}
                </option>
              </select>
              <label for="floatingSelect">Select a user</label>
            </div>
          </div>
          <div class="col-md-6 mt-2">
            <h3 class="text-center">Select Dates</h3>
            <div class="d-flex justify-content-around">
              <form class="form-floating">
                <input
                  type="date"
                  class="form-control"
                  name="from"
                  id="from"
                  v-model="from"
                />
                <label for="from">From:</label>
              </form>
              <form class="form-floating">
                <input
                  type="date"
                  class="form-control"
                  name="to"
                  id="to"
                  v-model="to"
                />
                <label for="to">To:</label>
              </form>
            </div>
          </div>
          <div class="col-12 mt-3">
            <div class="text-center">
              <button
                type="button"
                class="btn btn-outline-success fw-bold"
                @click="fetchUserConnectionsByDate"
              >
                Search
              </button>
            </div>
          </div>
          <div class="col-12 mt-3" v-if="userIdToSearch > 0">
            <hr />
            <h2 class="text-center">User #{{ userIdToSearch }} connections</h2>
            <div class="row mt-3">
              <div v-if="userConnections.length > 0">
                <div
                  class="col-12"
                  v-for="connection in userConnections"
                  :key="connection.id"
                >
                  <div class="row bg-light p-3 shadow mt-2 mb-2 border">
                    <div class="col">Socket: {{ connection.socketId }}</div>
                    <div class="col">Connect At: {{ connection.openAt }}</div>
                    <div class="col">
                      Disconnect At: : {{ connection.closedAt }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-else
                class="bg-light p-3 shadow mt-2 mb-2 border text-center"
              >
                <h4>
                  User #{{ userIdToSearch }} doesn't have any connection yet.
                </h4>
              </div>
            </div>
          </div>

          <div class="col mt-3 text-center">
            <hr />
            <button
              type="button"
              class="btn btn-outline-dark fw-bold"
              @click="showAllConnections = !showAllConnections"
            >
              <span v-if="showAllConnections">Hide all connections</span>
              <span v-if="!showAllConnections">Show all connections</span>
            </button>
            <div v-if="showAllConnections">
              <div v-if="allConnections.length > 1">
                <div class="row mt-3">
                  <h2 class="text-center">All users connections</h2>
                  <div
                    class="col-12"
                    v-for="connection in allConnections"
                    :key="connection.id"
                  >
                    <div class="row bg-light p-3 shadow mt-2 mb-2 border">
                      <div class="col-6 text-center">
                        User Id: {{ connection.userId }}
                      </div>
                      <div class="col-6 text-center mt-1">
                        Connect At: {{ connection.openAt }}
                      </div>
                      <div class="col-6 text-center">
                        Socket: {{ connection.socketId }}
                      </div>
                      <div class="col-6 text-center mt-1">
                        Disconnect At: : {{ connection.closedAt }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="mt-3">
                <h4>There aren't any connections yet.</h4>
              </div>

              <p></p>
            </div>
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
  name: "UsersActivity",
  components: {
    Layout,
  },
  inject: ["global"],
  data: () => {
    return {
      users: [],
      showUsers: false,
      isLoad: false,
      urlFetchUsers: "http://localhost:3500/users",
      urlFetchAllConnections: "http://localhost:3500/records/all",
      urlFetchUserConnections: "http://localhost:3500/records/user/",
      userIdToSearch: 0,
      userConnections: [],
      userConnectionsByDate: [],
      userConnectionsByDateSearch: false,
      showAllConnections: false,
      allConnections: [],
      from: "",
      to: "",
      isFetchedUser: false,
    };
  },
  async created() {
    await this.fetchUsers();
  },
  mounted() {
    this.isLoad = true;
  },
  methods: {
    async fetchUsers() {
      let response = await fetch(this.urlFetchUsers);
      this.users = await response.json();
      console.log(this.users);
    },
    async fetchAllConnections() {
      let response = await fetch(this.urlFetchAllConnections);
      this.allConnections = await response.json();
      console.log(this.allConnections);
    },
    async fetchUserConnectionsByDate() {
      const urlFetchUserConnectionsByDate = `http://localhost:3500/records/user/${this.userIdToSearch}/from/${this.from}/to/${this.to}`;
      let response = await fetch(urlFetchUserConnectionsByDate);
      this.userConnectionsByDate = await response.json();
      console.log(this.userConnectionsByDate);
      // console.log(this.userIdToSearch, this.from, this.to);
    },
  },
  watch: {
    showAllConnections: async function (value) {
      if (value) {
        await this.fetchAllConnections();
      }
    },
    userIdToSearch: async function (value) {
      let response = await fetch(this.urlFetchUserConnections + value);
      this.userConnections = await response.json();
      console.log(this.userConnections);
    },
  },
});
</script>
