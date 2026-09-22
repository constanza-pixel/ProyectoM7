import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ProductList from '@/components/ProductList.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ProductList.vue - Gestión de Errores', () => {
  let store;
  let productsModule;
  let filtersModule;

  beforeEach(() => {
    productsModule = {
      namespaced: true,
      state: {
        items: [],
        categories: [],
        loading: false,
        error: 'Error al sincronizar con el catálogo de la API.'
      },
      actions: {
        fetchProducts: jest.fn()
      }
    };

    filtersModule = {
      namespaced: true,
      state: {
        selectedCategory: ''
      },
      actions: {
        updateCategory: jest.fn()
      }
    };

    store = new Vuex.Store({
      modules: {
        products: productsModule,
        filters: filtersModule
      },
      getters: {
        filteredProducts: () => []
      }
    });
  });

  it('Muestra el mensaje de error visual ante una falla de la API', () => {
    const wrapper = shallowMount(ProductList, {
      store,
      localVue
    });

    // Validar que se muestre el contenedor de error y su texto descriptivo
    const errorBanner = wrapper.find('[data-test="state-error"]');
    expect(errorBanner.exists()).toBe(true);
    expect(errorBanner.text()).toContain('Error al sincronizar con el catálogo de la API.');
  });
});