import { createRouter, createWebHashHistory } from 'vue-router';

import CrearVehiculo from '@/pages/CrearVehiculo.vue';
import ConsultarVehiculos from '@/pages/ConsultarVehiculos.vue';

const routes = [
    {
        path: '/CrearProducto',
        name: 'Crear',
        component: CrearVehiculo
    },
    {
        path: '/ConsultarProducto',
        name: 'Consultar',
        component: ConsultarVehiculos
    }
];

const router = createRouter({
    history: createWebHashHistory(), 
    routes
});

export default router;
