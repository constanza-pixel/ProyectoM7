<template>
  <footer 
    class="text-center py-3 border-top mt-auto" 
    :class="darkMode ? 'bg-dark text-white border-secondary' : 'bg-light text-muted'"
  >
    <p class="mb-0">© 2026 TechStore Inc. - Proyecto Módulo 7</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    darkMode: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.app-footer {
  text-align: center;
  padding: 1.5rem;
  background: #f1f5f9;
  color: #64748b;
  margin-top: 3rem;
  border-top: 1px solid #cbd5e1;
}
</style>