<template>
  <div class="container" style="background: ;">

<div class="row">
 <div class="col-md-10 text-start"> <p class="fs-3"> Cadastrar Modelo</p> </div>
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
   <label for="recipient-name" class=" row m-auto col-form-label">Selecionar Marca:</label>
     <select type="text" class="form-select form-select-md  mb-3" aria-label=".form-select-md  example" v-model="modelo.marca"><option v-for="item in marca" :value="item">{{ item.nome }}</option></select>
 </div>
   <div class="col-md-12 text-start">
       <label class="form-label">Nome do Modelo</label>
       <input type="text" class="form-control" v-model="modelo.nome">
   </div>
</div>

<div class="row">
 <div class="col-md-3 offset-md-6"> 
   <div class="d-grid gap-2">
     <router-link type="button" id="voltarbt" class="btn btn-info" 
       to="/modelo/lista">Voltar
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
       id = "excluirbt" class="btn btn-danger" @click="onClickExcluir()">
       Excluir 
     </button>
   </div>
 </div>
</div>
</div>

   
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import ModeloClient from '/Users/55459/OneDrive/Documentos/estacionamento vue/estacionamento-vuejs/project/src/client/ModeloClient';

import { Modelo } from '/Users/55459/OneDrive/Documentos/estacionamento vue/estacionamento-vuejs/project/src/model/ModeloModel';

import MarcaClient from '/Users/55459/OneDrive/Documentos/estacionamento vue/estacionamento-vuejs/project/src/client/MarcaClient';
import { MarcaModel } from '/Users/55459/OneDrive/Documentos/estacionamento vue/estacionamento-vuejs/project/src/model/MarcaModel';


export default defineComponent({
 name: 'ModeloFormulario',
 data() {
   return { 
     modelo: new Modelo(),
     marca:  new Array<MarcaModel>(),
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
   this.findAllMarca();  

 },
 methods: {

   findAllMarca(){
     MarcaClient.listaAll().then(sucess =>{
       this.marca = sucess;
       console.log(sucess);
     })
     .catch(error =>{
         console.log(error)

       })

   },

   onClickCadastrar(){
     ModeloClient.cadastrar(this.modelo)
       .then(sucess => {
         this.modelo = new Modelo()

         
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
     ModeloClient.findById(id)
       .then(sucess => {
         this.modelo = sucess
       })
       .catch(error => {
         this.mensagem.ativo = true;
         this.mensagem.mensagem = error;
         this.mensagem.titulo = "Error. ";
         this.mensagem.css = "alert alert-danger alert-dismissible fade show";
       });
   },
   onClickEditar(){
     ModeloClient.editar(this.modelo.id, this.modelo)
       .then(sucess => {
         this.modelo = new Modelo()
         
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
     ModeloClient.excluir(this.modelo.id)
       .then(sucess => {
         this.modelo = new Modelo()
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

          #cadastrarbt{
            margin-top: 20px;
          }

          #excluirbt{
            margin-top: 20px;
          }

</style>