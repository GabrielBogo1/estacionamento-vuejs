<template>
    <div class="container">
  
  <div class="row">
   <div class="col-md-10 text-start"> <p class="fs-3">Cadastrar Condutor</p> </div>
   <hr/>
  </div>
  
  <div v-if="mensagem.ativo" class="row">
   <div class="col-md-12 text-start">
     <div :class="mensagem.css" role="alert">
       <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
   </div>
  </div>
  
  <div class="row">
  <div class="col-md-12 text-start">
         <label class="form-label">Nome:</label>
         <input type="text"  class="form-control" v-model="condutor.nome">
     </div>
     <div class="col-md-12 text-start">
         <label class="form-label">CPF: </label>
         <input type="text" class="form-control" v-model="condutor.cpf">
     </div>
     <div class="col-md-12 text-start">
         <label class="form-label">Telefone: </label>
         <input type="text" class="form-control" v-model="condutor.telefone">
     </div>
  </div>
  
  <div class="row">
   <div class="col-md-3 offset-md-6"> 
     <div class="d-grid gap-2">
       <router-link type="button" id="voltarbt" class="btn btn-info" 
         to="/condutor/lista">Voltar
       </router-link>
     </div>
   </div>
   <div class="col-md-3 "> 
     <div class="d-grid gap-2">
       <button v-if="this.form === undefined" type="button" 
           id="cadastrarbt" class="btn btn-success" @click="onClickCadastrar()">
         Cadastrar 
       </button>
       <button v-if="this.form === 'editar'" type="button" 
          id="editarbt" class="btn btn-warning" @click="onClickEditar()">
         Editar 
       </button>
       <button v-if="this.form === 'excluir'" type="button"
         id="excluirbt" class="btn btn-danger" @click="onClickExcluir()">
         Excluir 
       </button>
     </div>
   </div>
  </div>
  </div>
  
     
  </template>
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
    
  import CondutorClient from '/Users/55459/OneDrive/Documentos/estacionamento vue/estacionamento-vuejs/project/src/client/CondutorClient';
  import { Condutor } from '/Users/55459/OneDrive/Documentos/estacionamento vue/estacionamento-vuejs/project/src/model/CondutorModel';  
  
  export default defineComponent({
   name: 'CondutorFormulario',
   /* eslint-disable */
   data() {
     return { 
       condutor: new Condutor(),
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
     },
   },
   mounted() { 
  
     if(this.id !== undefined){
       this.findById(Number(this.id));
     }
  
   },
   methods: {

  
     onClickCadastrar(){
       CondutorClient.cadastrar(this.condutor)
         .then(sucess => {
           this.condutor = new Condutor()
  
           
           this.mensagem.ativo = true;
           this.mensagem.mensagem = sucess;
           this.mensagem.css = "alert alert-success alert-dismissible fade show";
         })
         .catch(error => {
           this.mensagem.ativo = true;
           this.mensagem.mensagem = error;
           this.mensagem.titulo = "Error. ";
           this.mensagem.css = "alert alert-danger alert-dismissible fade show";
         });
     },
     findById(id: number){
       CondutorClient.findById(id)
         .then(sucess => {
           this.condutor = sucess
         })
         .catch(error => {
           this.mensagem.ativo = true;
           this.mensagem.mensagem = error;
           this.mensagem.titulo = "Error. ";
           this.mensagem.css = "alert alert-danger alert-dismissible fade show";
         });
     },
     onClickEditar(){
       CondutorClient.editar(this.condutor.id, this.condutor)
         .then(sucess => {
           this.condutor = new Condutor()
           
           this.mensagem.ativo = true;
           this.mensagem.mensagem = sucess;
           this.mensagem.css = "alert alert-success alert-dismissible fade show";
         })
         .catch(error => {
           this.mensagem.ativo = true;
           this.mensagem.mensagem = error;
           this.mensagem.titulo = "Error. ";
           this.mensagem.css = "alert alert-danger alert-dismissible fade show";
         });
     },
     onClickExcluir(){
       CondutorClient.excluir(this.condutor.id)
         .then(sucess => {
           this.condutor = new Condutor()
           this.mensagem.ativo = true;
           this.mensagem.mensagem = sucess;
           this.mensagem.css = "alert alert-success alert-dismissible fade show";
           
           
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
  
  
  <style lang="scss">
      .col-md-10{
              font-size: 32px;
              font-weight: 600;
              font-family: 'Poppins', sans-serif;
          }

          .fs-3{
            margin-top: 20px;
          }

          #voltarbt{
            margin-top: 20px;
          }

          #editarbt{
            margin-top: 20px;
          }

          #excluirbt{
            margin-top: 20px;
          }

          #cadastrarbt{
            margin-top: 20px;
          }
  </style>