<template>

    <div class="container">
       <div class="row">
          <div class="col-md-10 text-start">
             <router-link type="button" class="btn btn-info" 
                to="/veiculo/lista"><i class="ri-arrow-left-s-line"></i></router-link>
             Cadastrar nova veiculo 
          </div>
       </div>
       <!-- <div v-if="mensagem.ativo" class="row">
          <div class="col-md-12 text-start">
            <div :class="mensagem.css" role="alert">
              <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
          </div> -->
       <div class="conteudo-form">
          <div class="col-md-12 text-start">
             <input type="text" placeholder="Nome da veiculo" v-model="veiculo.nome">
          </div>
       </div>
       <div>
          <button v-if="this.form === undefined" type="button" class="btn btn-success" @click="onClickCadastrar()">Cadastrar</button>
       </div>
       <div class="col-md-3 "> 
          <button v-if="this.form === 'editar'" type="button" 
             class="btn btn-warning" @click="onClickEditar()">
          Editar 
          </button>
          <button v-if="this.form === 'excluir'" type="button" 
             class="btn btn-danger" @click="onClickExcluir()">
          Excluir 
          </button>
       </div>
    </div>
    
      
      </template>
    
    
    <style lang="scss">
        .col-md-10{
            font-size: 32px;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
        }
    
        .ri-arrow-left-s-line{
            color: black;
        }
    
        .btn-info{
            background-color: white;
            border: none;
            padding: 4px;
        }
    
        .btn-success{
            font-family: 'Poppins';
            background-color: #29fd53;
    
            margin-top: 20px;
        }
    
    .conteudo-form{
        margin-top: 20px;
    }
    
    </style>
    
      
      <script lang="ts">
      
      import VeiculoClient from '/Users/55459/OneDrive/Documentos/estacionamento vue/estacionamento-vuejs/project/src/client/VeiculoClient';
      import { Veiculo } from '/Users/55459/OneDrive/Documentos/estacionamento vue/estacionamento-vuejs/project/src/model/VeiculoModel';
      import { defineComponent } from 'vue';
      
      export default defineComponent({
        name: 'VeiculoFormulario',
        data() {
          return { 
            veiculo: new Veiculo(),
            mensagem: {
              ativo: false as boolean,
              titulo: "" as string,
              mensagem: "" as string,
              css: "" as string
            }
          }
        },
        computed: {
          id () {
            return this.$route.query.id
          },
          form () {
            return this.$route.query.form
          }
        },
        mounted() { 
      
          if(this.id !== undefined){
            this.findById(Number(this.id));
          }
      
      
        },
        methods: {
      
          onClickCadastrar(){
            VeiculoClient.cadastrar(this.veiculo)
              .then(sucess => {
                this.veiculo = new Veiculo()
                
                this.mensagem.ativo = true;
                this.mensagem.mensagem = sucess;
                this.mensagem.titulo = "Parabens. ";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
                this.$router.push({ name: 'veiculo-lista-view' });
              })
              .catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
              });
          },
          findById(id: number){
            VeiculoClient.findById(id)
              .then(sucess => {
                this.veiculo = sucess
              })
              .catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
              });
          },
          onClickEditar(){
            VeiculoClient.editar(this.veiculo.id, this.veiculo)
              .then(sucess => {
                this.veiculo = new Veiculo()
                
                this.mensagem.ativo = true;
                this.mensagem.mensagem = sucess;
                this.mensagem.titulo = "Parabens. ";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
                this.$router.push({ name: 'veiculo-lista-view' });
              })
              .catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
              });
          },
          onClickExcluir(){
            VeiculoClient.excluir(this.veiculo.id)
              .then(sucess => {
                this.veiculo = new Veiculo()
                
                this.$router.push({ name: 'veiculo-lista-view' });
              })
              .catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
              });
          }
        }
      });
      
      </script>