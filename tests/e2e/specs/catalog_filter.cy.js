describe('Catálogo de Productos - Filtro por Categoría', () => {
  it('Usuario filtra productos y ve los resultados correspondientes', () => {
    // 1. Visitar la aplicación
    cy.visit('/');

    // 2. Esperar que la grilla cargue y existan productos visibles
    cy.get('[data-test="catalog-grid"]').should('be.visible');
    cy.get('[data-test="product-card"]').should('have.length.greaterThan', 0);

    // 3. Seleccionar la primera categoría disponible en el select
    cy.get('[data-test="category-select"]')
      .find('option')
      .its('length')
      .then((len) => {
        if (len > 1) {
          // Selecciona la segunda opción (índice 1, ya que índice 0 es "Todas")
          cy.get('[data-test="category-select"]').select(1);

          // 4. Verificar que la grilla siga visible y muestre las tarjetas filtradas
          cy.get('[data-test="catalog-grid"]').should('be.visible');
          cy.get('[data-test="product-card"]').should('have.length.greaterThan', 0);
        }
      });
  });
});