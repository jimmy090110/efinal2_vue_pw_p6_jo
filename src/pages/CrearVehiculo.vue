<template>
  <div class="container">
    <div class="form">
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

    <button @click="guardarVehiculo">Guargar</button>
  </div>
</template>

<script>
import { guardarFachada } from "@/clients/clietes";
export default {
  data() {
    return {
      placa: null,
      marca: null,
      modelo: null,
      color: null,
      precio: null,
    };
  },
  methods: {
    async guardarVehiculo() {
      const vehiculobody = {
        placa: this.placa,
        marca: this.marca,
        modelo: this.modelo,
        color: this.color,
        precio: this.precio,
      };


      const data = await guardarFachada(vehiculobody);
      console.log(data);
      alert("Vehiculo Guardado");
    },
  },
};
</script>

<style  >
body {
    background: #9da976 ;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.form{
    border: 2px solid black;
    display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background: #b7b7b7;
}
</style>

