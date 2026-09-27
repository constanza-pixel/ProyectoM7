# Vue product showcase - Proyecto módulo 7
Catálogo interactivo SPA (Single Page Application) desarrollado en Vue.js para el área de E-commerce, enfocado en modularidad, visualización fluida de productos mediante API REST, gestión centralizada del estado, suite de pruebas automatizadas y estilizado responsive con soporte de temas.

## Tecnologías y librerías utilizadas
-**Framework:** Vue-js con vue cli
-**Enrutamiento:** Vue Router
-**Estado global:** Vuex 3 (Arquitectura modular: `products`, `filters`, `favorites`)
-**Cliente HTTP:** Axios
-**Librería UI:** BootstrapVue (diseño responsive, cards, selects y alerts)
-**Testing unitario:** Vue test utils + Jest
-**Testing E2E:** Cypress

### Instalación y puesta en marcha en terminal
1. Clonar el repositorio:
git clone <URL_DE_TU_REPOSITORIO_GITHUB>
cd vue-product-showcase
2. Instalar dependencias del proyecto:
npm install
3. Ejecutar el servidor local de desarrollo:
npm run serve
4. Compilar para producción:
npm run build

#### Ejecución de pruebas automatizadas
El proyecto cuenta con cobertura de pruebas unitarias y de integración end-to-end conforme a las especificaciones de calidad del módulo:

1. Pruebas Unitarias (Jest + Vue Test)
Valida el renderizado correcto y aislado del componente <ProductCard> y la respuesta visual ante escenarios de error de red o API en <ProductList>:
npm run test:unit

2. Pruebas End-to-End (Cypress)
Ejecuta la suite e2e simulando la experiencia de un usuario al filtrar por categorías y verificar los resultados en la grilla:
npm run test:e2e

##### Justificaciones Técnicas de Arquitectura
1. Arquitectura de Componentes y Ciclo de Vida:
**-División en Componentes Atómicos:** Siguiendo el principio de componentización de Vue, la interfaz se segmentó en componentes desacoplados (Header, Footer, ProductList, ProductCard). Esto maximiza la reutilización de código y encapsula la lógica, template y estilos correspondientes a cada bloque.
**-Comunicación Unidireccional:** El flujo de datos opera de padres a hijos mediante props (enviando la información formateada a cada tarjeta), y la delegación de acciones hacia componentes superiores a través de $emit.
**-Hooks del Ciclo de Vida:** Se aplicó el hook created() para disparar la carga asíncrona de datos antes del render inicial, y mounted() para registrar y validar el montaje efectivo del componente en el DOM.

2. Centralización y Modularización del Estado con Vuex
**-Desacoplamiento de Lógica de Negocio:** Se extrajo el consumo de datos de los componentes hacia acciones de Vuex con Axios, permitiendo que las vistas se concentren exclusivamente en la capa de presentación.
**-Módulos Independientes:** El store fue dividido en tres módulos funcionales para evitar stores monolíticos y facilitar la escalabilidad:
- products: Administra el arreglo de productos, categorías, y los estados reactivos de loading y error.
- filters: Controla la categoría activa seleccionada en la barra de herramientas.
- favorites: Gestiona la lista de productos seleccionados por el usuario mediante mutaciones y getters computados.
**-Getters Derivados:** El cálculo de los productos filtrados se delegó a un getter de Vuex (filteredProducts), evitando recomputaciones innecesarias dentro de los componentes.

3. Integración de Librería UI (BootstrapVue)
**-Consistencia Visual y Responsividad:** Se seleccionó BootstrapVue para estandarizar botones, formularios selectores, tarjetas (b-card) y alertas sin necesidad de maquetar CSS manual complejo.
**-Tema Claro / Oscuro:** Se implementó un conmutador de tema reactivo ligado a clases dinámicas globales para mejorar la accesibilidad visual.
**-Mejores Prácticas:** Se centralizó el registro de la librería en main.js y se aplicó su sistema de grillas responsivo (b-row, b-col) para garantizar adaptabilidad completa en móviles, tablets y monitores de escritorio.

4. Evaluación de Escalabilidad (Nuxt.js vs. Quasar Framework)
En función del crecimiento futuro del catálogo planteado en la situación inicial:
**-Nuxt.js:** Se justifica si el objetivo primordial del e-commerce requiere indexación pública y posicionamiento orgánico en motores de búsqueda mediante Server-Side Rendering (SSR) o generación estática (SSG).
**-Quasar Framework:** Se justifica si la prioridad comercial es extender la aplicación hacia entornos móviles híbridos (iOS/Android vía Capacitor/Cordova) o clientes de escritorio (Electron) conservando una base de código única.

