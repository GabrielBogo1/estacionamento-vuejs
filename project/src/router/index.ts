import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/marca/lista',
    name: 'marca-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaListaView.vue')
  },

  {
    path: '/marca/formulario',
    name: 'marca-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue'),
    children: [
      {
        path: '/marca/formulario',
        name: 'marca-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue')
      },
      {
        path: '/marca/formulario',
        name: 'marca-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue')
      }
    ]
  },
  {
    path: '/veiculo/lista',
    name: 'veiculo-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/VeiculoListaView.vue')
  },

  {
    path: '/veiculo/formulario',
    name: 'veiculo-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/VeiculoFormView.vue'),
    children: [
      {
        path: '/veiculo/formulario',
        name: 'veiculo-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/VeiculoFormView.vue')
      },
      {
        path: '/veiculo/formulario',
        name: 'veiculo-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/VeiculoFormView.vue')
      }
    ]
  },
  {
    path: '/modelo/lista',
    name: 'modelo-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/ModeloListaView.vue')
  },

  {
    path: '/modelo/formulario',
    name: 'modelo-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/ModeloFormView.vue'),
    children: [
      {
        path: '/modelo/formulario',
        name: 'modelo-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/ModeloFormView.vue')
      },
      {
        path: '/modelo/formulario',
        name: 'modelo-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/ModeloFormView.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
