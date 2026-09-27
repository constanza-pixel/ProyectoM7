<template>
  <div 
    id="app" 
    :data-bs-theme="darkMode ? 'dark' : 'light'" 
    :class="darkMode ? 'bg-dark text-white' : 'bg-light text-dark'"
  >
    <AppHeader :darkMode="darkMode" @toggle-theme="toggleTheme" />    
    <main class="main-content">
      <ProductList :darkMode="darkMode" />
    </main>
    <AppFooter :darkMode="darkMode" />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import ProductList from './components/ProductList.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    ProductList,
    AppFooter
  },
  data() {
    return {
      darkMode: false
    };
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.body.style.backgroundColor = '#212529';
      } else {
        document.body.style.backgroundColor = '#f8f9fa';
      }
    }
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.main-content {
  flex: 1;
}
.bg-light-theme {
  background-color: #f8fafc;
  color: #212529;
}
.bg-dark-theme {
  background-color: #121212 !important;
  color: #f8f9fa !important;
}
body {
  margin: 0;
  background-color: #f8f9fa;
  transition: background-color 0.25s ease;
}
</style>