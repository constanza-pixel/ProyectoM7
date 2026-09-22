import { shallowMount } from '@vue/test-utils';
import ProductCard from '@/components/ProductCard.vue';

describe('ProductCard.vue', () => {
  const mockProducto = {
    id: 1,
    nombre: 'Monitor Gamer 24 pulgadas',
    categoria: 'tecnologia',
    precio: 180000,
    descripcion: 'Monitor FHD con 144Hz de tasa de refresco.',
    imagen: 'https://via.placeholder.com/150'
  };

  it('Renderiza correctamente la información del producto', () => {
    const wrapper = shallowMount(ProductCard, {
      propsData: {
        producto: mockProducto
      }
    });

    // Validar título y precio renderizados
    expect(wrapper.find('[data-test="product-title"]').text()).toBe(mockProducto.nombre);
    expect(wrapper.find('.price').text()).toContain('180.000');
    expect(wrapper.find('.category-tag').text()).toBe(mockProducto.categoria);
  });
});