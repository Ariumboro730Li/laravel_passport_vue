<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link :to="{ name: 'login' }" class="navbar-brand"
        >LARAVEL PASSPORT + VUE</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'register' }" class="nav-link" href=""
              >REGISTER</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link" href="#"
              >LOGIN</router-link
            >
          </li>
        </ul>
      </div>
      <ul class="list-group">
        <li
          @click.prevent="logout"
          class="list-group-item text-dark text-decoration-none"
          style="cursor: pointer"
        >
          LOGOUT
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  //method logout
  setup() {
    const token = localStorage.getItem("token");
    //inisialisasi vue router on Composition API
    const router = useRouter();
    function logout() {
      //state token
      //logout
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios
        .post("http://127.0.0.1:8000/api/logout")
        .then((response) => {
          console.log(response.data.success);
          if (response.data.success) {
            //remove localStorage
            localStorage.removeItem("token");

            //redirect ke halaman login
            return router.push({
              name: "login",
            });
          }
        })
        .catch((error) => {
          console.log("ini" + error);
          // console.log(error.response.data.data);
        });
    }

    return {
      logout, // <-- method logout
    };
  },
};
</script>

<style>
body {
  background: lightgray !important;
}
</style>