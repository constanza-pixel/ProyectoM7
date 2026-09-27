<template>
  <nav 
    class="navbar px-4 shadow-sm border-bottom" 
    :class="darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'"
  >
    <div class="container">
      <span class="navbar-brand mb-0 h1 fw-bold">
        TechStore Showcase
      </span>
      <button 
        type="button" 
        class="btn btn-sm"
        :class="darkMode ? 'btn-outline-light' : 'btn-outline-dark'"
        @click="$emit('toggle-theme')"
      >
        {{ darkMode ? ' Modo Claro' : ' Modo Oscuro' }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    darkMode: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.app-navbar {
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
.navbar-brand {
  font-size: 1.25rem;
  letter-spacing: -0.5px;
}
.btn {
  font-weight: 500;
  transition: all 0.2s ease-in-out;
}
</style>