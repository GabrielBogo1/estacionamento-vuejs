import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'movimentacao-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacao/MovimentacaoListaView.vue')
  },
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
  },
  {
    path: '/condutor/lista',
    name: 'condutor-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/CondutorListaView.vue')
  },

  {
    path: '/condutor/formulario',
    name: 'condutor-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/CondutorFormView.vue'),
    children: [
      {
        path: '/condutor/formulario',
        name: 'condutor-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/CondutorFormView.vue')
      },
      {
        path: '/condutor/formulario',
        name: 'condutor-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/CondutorFormView.vue')
      }
    ]
  },
  {
    path: '/movimentacao/lista',
    name: 'movimentacao-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacao/MovimentacaoListaView.vue')
  },

  {
    path: '/movimentacao/formulario',
    name: 'movimentacao-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacao/MovimentacaoFormView.vue'),
    children: [
      {
        path: '/movimentacao/formulario',
        name: 'movimentacao-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacao/MovimentacaoFormView.vue')
      },
      {
        path: '/movimentacao/formulario',
        name: 'movimentacao-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacao/MovimentacaoFormView.vue')
      }
    ]
  },
  {
    path: '/configuracao/lista',
    name: 'configuracao-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Configuracao/ConfiguracaoListaView.vue')
  },

  {
    path: '/configuracao/formulario',
    name: 'configuracao-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Configuracao/ConfiguracaoFormView.vue'),
    children: [
      {
        path: '/configuracao/formulario',
        name: 'configuracao-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/Configuracao/ConfiguracaoFormView.vue')
      },
      {
        path: '/configuracao/formulario',
        name: 'configuracao-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/Configuracao/ConfiguracaoFormView.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
