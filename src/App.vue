<template>
  <div class="app-container grid">
    <main-header />
    <div class="main-content grid grid-cols-12">
      <NavSidebar class="col-span-2" />
      <router-view class="col-span-10 p-12" />
    </div>
  </div>
  <main-spinner :active="isLoading" />
</template>

<script>
import MainHeader from "@/components/MainHeader";
import NavSidebar from "@/components/NavSidebar.vue";
import MainSpinner from "@/components/shared/MainSpinner";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    MainHeader,
    NavSidebar,
    MainSpinner,
  },
  computed: {
    ...mapState(["isLoading"]),
  },
};
</script>

<style>
:root {
  --primary: #00351a;
  --secondary: #00a14e;
  --accent: #ffa500;
  --light: #f8f9fb;
  --dark: #1a2e1f;
  --gray: #6c757d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(135deg, #c2c7c3 0%, #e3f0e7 100%);
  color: #333;
  line-height: 1.6;
  padding: 20px;
}

.cms-container {
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.cms-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
th {
  @apply py-4 px-8 font-black text-primary text-left border-b border-gray-200;
}

td {
  @apply py-4 px-8 border-b border-gray-100;
}
tbody tr {
  @apply hover:bg-secondary-light;
}

tr:last-child td {
  border-bottom: none;
}

.action-btn {
  @apply px-4 py-2 rounded-lg border-0 bg-light text-primary
  font-medium cursor-pointer transition-all duration-300 ease-in-out
  inline-flex items-center gap-4 m-1;
}

.action-btn:hover {
  @apply bg-secondary text-white;
}
</style>
