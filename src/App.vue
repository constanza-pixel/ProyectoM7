<template>
  <div id="app">
    <AppHeader />
    <ProductList />
    <AppFooter />
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
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f8fafc;
  color: #1e293b;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>