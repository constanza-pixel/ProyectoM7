<template>
  <div 
    class="card h-100 shadow-sm border" 
    :class="{ 'bg-dark text-white border-secondary': darkMode }"
    data-test="product-card"
  >
<div class="image-wrapper p-3 d-flex align-items-center justify-content-center bg-white rounded-top">
      <img 
        :src="producto.imagen" 
        :alt="producto.nombre" 
        class="img-fluid product-img"
      />
    </div>

<div class="card-body d-flex flex-direction-column flex-column">
      <span class="badge bg-secondary align-self-start mb-2 text-uppercase">
        {{ producto.categoria }}
      </span>
  <h5 class="card-title text-truncate fw-bold mb-2" :title="producto.nombre" data-test="product-title">
        {{ producto.nombre }}
      </h5>
  <p class="card-text text-muted small flex-grow-1 desc-truncate">
        {{ producto.descripcion }}
      </p>

  <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
        <span class="h5 mb-0 fw-bold text-primary">
          ${{ producto.precio ? producto.precio.toLocaleString() : 0 }}
        </span>
        <button
        class="btn btn-primary btn-sm"
        @click="$emit('seleccionar', producto)"
        >
        Ver Detalle
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    producto: {
      type: Object,
      required: true
    },
    darkMode: {
      type: Boolean,
      default: false
    }
  }
  };
</script>

<style scoped>
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.image-wrapper {
  height: 200px;
}
.product-img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}
.desc-truncate {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>