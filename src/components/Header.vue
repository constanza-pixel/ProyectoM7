<template>
  <header class="app-header">
    <div class="logo">TechStore Showcase</div>
    <nav>
      <span>Catálogo Interactivo</span>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f172a;
  color: #ffffff;
  padding: 1rem 2rem;
}
.logo {
  font-weight: 700;
  font-size: 1.2rem;
}
</style>