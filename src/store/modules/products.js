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
        const response = await axios.get(`${process.env.BASE_URL}db.json`);

        const rawProducts = response.data.productos || response.data;

        const productosFormateados = rawProducts.map(item => ({
        id: item.id,
        nombre: item.nombre || item.title,
        categoria: item.categoria || item.category,
        precio: item.precio || item.price,
        descripcion: item.descripcion || item.description,
        imagen: item.imagen || item.image
      }));

        const categorias = response.data.categorias || [
        ...new Set(productosFormateados.map(p => p.categoria))
      ];

        commit('SET_PRODUCTS', resProds.data);
        commit('SET_CATEGORIES', resCats.data);
      } catch (err) {
        commit('SET_ERROR', 'Error al sincronizar con la API Mock local.');
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