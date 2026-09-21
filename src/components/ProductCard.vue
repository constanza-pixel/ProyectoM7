<template>
  <article class="product-card" data-test="product-card">
    <div class="image-wrapper">
      <img :src="producto.imagen" :alt="producto.nombre" class="product-img" />
    </div>
    <div class="product-info">
      <span class="category-tag">{{ producto.categoria }}</span>
      <h3 class="product-name" data-test="product-title">{{ producto.nombre }}</h3>
      <p class="product-description">{{ producto.descripcion }}</p>
      <div class="product-footer">
        <span class="price">${{ producto.precio.toLocaleString() }}</span>
        <button class="btn-detail" @click="$emit('seleccionar', producto)">Ver Detalle</button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    producto: {
      type: Object,
      required: true
    }
  },
  mounted() {
    // Cumplimiento del hook del ciclo de vida para verificar montaje en DOM
    console.log(`[ProductCard montado]: ${this.producto.nombre}`);
  }
};
</script>

<style scoped>
.product-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.image-wrapper {
  height: 180px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.product-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.category-tag {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #64748b;
  font-weight: bold;
}
.product-name {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #1e293b;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.product-description {
  font-size: 0.85rem;
  color: #475569;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 1rem;
}
.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
}
.btn-detail {
  background: #2563eb;
  color: #ffffff;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>