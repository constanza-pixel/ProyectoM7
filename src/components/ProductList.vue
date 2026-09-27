<template>
  <div class="container my-4">
    <div class="row mb-4 align-items-center justify-content-between">
      <div class="col-12 col-md-6">
        <h2 class="h4 mb-0 fw-bold title-catalog" :class="{ 'text-white': darkMode }">
          Catálogo Disponible
        </h2>
      </div>
      <div class="col-12 col-md-4 mt-3 mt-md-0" v-if="!loading && !error">
        <label for="category-select" class="form-label fw-bold mb-1" :class="{ 'text-white': darkMode }">
          Filtrar por categoría:
        </label>
        <select
          id="category-select"
          class="form-select shadow-sm"
          data-test="category-select"
          :value="selectedCategory"
          @change="onCategoryChange"
        >
          <option value="">Todas las categorías</option>
          <option v-for="cat in categories" :key="cat" :value="cat">
            {{ cat }}
          </option>
        </select>
      </div>
    </div>

    <!-- Estado: cargando -->
    <div v-if="loading" class="text-center py-5 state-box rounded" data-test="state-loading">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-3 text-muted fw-semibold">Cargando catálogo de productos...</p>
    </div>

    <!-- Estado: error -->
    <div 
      v-else-if="error" 
      class="alert alert-danger text-center py-4 shadow-sm" 
      role="alert" 
      data-test="state-error"
    >
      <h5 class="alert-heading fw-bold">Ocurrió un inconveniente</h5>
      <p class="mb-3">{{ error }}</p>
      <button class="btn btn-danger btn-sm px-4" @click="fetchProducts">
        Reintentar
      </button>
    </div>

    <!-- Estado: vacío -->
    <div 
      v-else-if="filteredProducts.length === 0" 
      class="alert alert-warning text-center py-4 shadow-sm" 
      role="alert" 
      data-test="state-empty"
    >
      <p class="mb-0 fw-semibold">No hay productos disponibles para esta categoría.</p>
    </div>

    <!-- Grilla responsive de productos -->
    <div v-else class="row g-4" data-test="catalog-grid">
      <div 
        class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
        v-for="prod in filteredProducts"
        :key="prod.id"
      >
        <ProductCard 
          :producto="prod" 
          :darkMode="darkMode" 
          @seleccionar="abrirDetalle"
        />
      </div>
    </div>
    <!-- Modal de detalle de producto -->
    <div 
      v-if="productoSeleccionado" 
      class="modal fade show d-block modal-backdrop-custom" 
      tabindex="-1"
      @click.self="cerrarDetalle"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" :class="{ 'bg-dark text-white border-secondary': darkMode }">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title fw-bold">{{ productoSeleccionado.nombre }}</h5>
            <button 
              type="button" 
              class="btn-close" 
              :class="{ 'btn-close-white': darkMode }"
              @click="cerrarDetalle"
            ></button>
          </div>
          <div class="modal-body text-center">
            <div class="p-3 bg-white rounded mb-3">
              <img 
                :src="productoSeleccionado.imagen" 
                :alt="productoSeleccionado.nombre" 
                class="img-fluid"
                style="max-height: 220px; object-fit: contain;"
              />
            </div>
            <span class="badge bg-secondary mb-2 text-uppercase">
              {{ productoSeleccionado.categoria }}
            </span>
            <p class="text-muted small text-start mt-2" :class="{ 'text-light': darkMode }">
              {{ productoSeleccionado.descripcion }}
            </p>
            <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
              <span class="h4 mb-0 fw-bold text-primary">
                ${{ productoSeleccionado.precio ? productoSeleccionado.precio.toLocaleString() : 0 }}
              </span>
            </div>
          </div>
          <div class="modal-footer border-top-0">
            <button type="button" class="btn btn-secondary btn-sm" @click="cerrarDetalle">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: { ProductCard },
  props: {
    darkMode: {
      type: Boolean,
      default: false
  }
},
data() {
    return {
      productoSeleccionado: null
    };
  },
  computed: {
    //Mapeo de estados locales de los módulos con namespaced: true
    ...mapState('products', ['categories', 'loading', 'error']),
    ...mapState('filters', ['selectedCategory']),
    ...mapGetters(['filteredProducts'])
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    ...mapActions('filters', ['updateCategory']),
    onCategoryChange(e) {
      this.updateCategory(e.target.value);
    },
    abrirDetalle(producto) {
      this.productoSeleccionado = producto;
    },
    cerrarDetalle() {
      this.productoSeleccionado = null;
    }
  }
};
</script>

<style scoped>
.state-box {
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px dashed #cbd5e1;
}
.modal-backdrop-custom {
  background-color: rgba(0, 0, 0, 0.6);
}
.form-select {
  border-radius: 6px;
  border-color: #cbd5e1;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.form-select:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.title-catalog {
  letter-spacing: -0.5px;
}
</style>