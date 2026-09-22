import { createStore } from 'vuex';
import products from './modules/products';
import filters from './modules/filters';
import favorites from './modules/favorites';

export default createStore({
  modules: {
    products,
    filters,
    favorites
  },
  getters: {
    filteredProducts: (state) => {
      const list = state.products.items;
      const category = state.filters.selectedCategory;
      if (!categoria) return list;
        return list.filter(item.categoria === category);
      }
    }
});