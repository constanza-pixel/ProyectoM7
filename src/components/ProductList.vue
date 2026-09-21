<template>
  <main class="catalog-container">
    <div class="toolbar">
      <div class="filter-box" v-if="!cargando && !error">
        <label for="category-select">Categoría:</label>
        <select 
          id="category-select" 
          data-test="category-select"
          :value="selectedCategory"
          @change="onCategoryChange"
        >
          <option value="">Todas las categorías</option>
          <option v-for="cat in categorias" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
    </div>

    <!-- Estado: Cargando -->
    <div v-if="cargando" class="state-banner" data-test="state-loading">
      <p>Cargando productos...</p>
    </div>

    <!-- Estado: Error -->
    <div v-else-if="error" class="state-banner error" data-test="state-error">
      <p>{{ error }}</p>
      <button @click="obtenerDatos" class="btn-retry">Reintentar</button>
    </div>

    <!-- Estado: Vacío -->
    <div v-else-if="productosFiltrados.length === 0" class="state-banner empty" data-test="state-empty">
      <p>No hay productos disponibles para esta categoría.</p>
    </div>

    <!-- Grilla de productos -->
    <div v-else class="catalog-grid" data-test="catalog-grid">
      <ProductCard 
        v-for="item in productosFiltrados" 
        :key="item.id" 
        :producto="item" 
      />
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: { ProductCard },
  computed: {
    //Mapeo de estados locales de los módulos con namespaced: true
    ...mapState('products', ['categories', 'loading', 'error']),
    ...mapState('filters', ['selectedCategory]),
    ...mapGetters(['filteredProducts'])
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    ...mapActions('filters', ['updateCategory']),

    onCategoryChange(event) {
        this.updateCategory(event.target.value);
    }
  }
};
</script>

<style scoped>
.catalog-container {
  max-width: 1100px;
  margin: 1.5rem auto;
  padding: 0 1rem;
}
.toolbar {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: flex-end;
}
.filter-box label {
  margin-right: 0.5rem;
  font-weight: bold;
}
.filter-box select {
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
}
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}
.state-banner {
  text-align: center;
  padding: 3rem 1rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}
.state-banner.error {
  background: #fef2f2;
  color: #dc2626;
  border-color: #fecaca;
}
.btn-retry {
  margin-top: 0.8rem;
  background: #dc2626;
  color: #ffffff;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>