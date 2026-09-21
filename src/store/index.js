import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import filters from './modules/filters';
import favorites from './modules/favorites';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    filters,
    favorites
  },
  getters: {
    filteredProducts: (state) => {
      const list = state.products.selectedCategory;
      if (!categoria) return list;
        return list.filter(item.categoria === category);
      }
    }
});