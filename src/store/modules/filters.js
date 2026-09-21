export default {
  namespaced: true,
  state: () => ({
    selectedCategory: ''
  }),
  mutations: {
    SET_CATEGORY(state, category) {
      state.selectedCategory = category;
    }
  },
  actions: {
    updateCategory({ commit }, category) {
      commit('SET_CATEGORY', category);
    }
  }
};