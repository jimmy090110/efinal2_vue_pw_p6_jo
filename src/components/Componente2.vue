<template>
    <div class="container">
      <label for="placa">Placa</label>
      <input id="placa" type="text" v-model="placa" />
      
      <label for="marca">Marca</label>
      <input id="marca" type="text" v-model="marca" />
  
      <label for="modelo">Modelo</label>
      <input id="modelo" type="text" v-model="modelo" />
  
      <label for="color">Color</label>
      <input id="color" type="text" v-model="color" />
      
      <label for="precio">Precio</label>
      <input id="precio" type="text" v-model="precio" />
    
     
    </div>
  </template>
  
  <script>

  
  export default {
  
      data(){
          return{
              placa:null,
              marca:null,
              modelo:null,
              color:null,
              precio:null
          }
          
      },
      methods:{
       
       
     
      },
     
  
  };
  
  
  </script>
  
  <style  >
  body{
    background: #397258;
  }
      .container{

          display: flex;
          flex-direction: column;
          align-items: center;
          border: 2px solid black;
          
      }
  </style>