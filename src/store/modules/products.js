import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    items: [],
    categories: [],
    loading: false,
    error: null
  }),
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
    SET_PRODUCTS(state, payload) {
      state.items = payload;
    },
    SET_CATEGORIES(state, payload) {
      state.categories = payload;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      try {
        const [resProds, resCats] = await Promise.all([
          axios.get('https://fakestoreapi.com/products'),
          axios.get('https://fakestoreapi.com/products/categories')
        ]);

        const productosFormateados = resProds.data.map(item => ({
          id: item.id,
          nombre: item.title,
          categoria: item.category,
          precio: Math.round(item.price * 950),
          descripcion: item.description,
          imagen: item.image
        }));

        commit('SET_PRODUCTS', productosFormateados);
        commit('SET_CATEGORIES', resCats.data);
      } catch (err) {
        commit('SET_ERROR', 'Error de conexión al cargar la lista de productos desde la API.');
      } finally {
        commit('SET_LOADING', false);
      }
    }
  },
  getters: {
    allProducts: (state) => state.items,
    allCategories: (state) => state.categories,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error
  }
};