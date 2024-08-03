<template>
  <div class="container">
    <button @click="consultar" >Consultar</button>

    <div class="comp1">
      <thead>
        <tr>
          <th>Placa</th>
          <th>Marca</th>
          <th>Acción</th>
          <th>Acción</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(vehiculo, index) in vehiculos " :key="index" >
            <td>{{ vehiculo.placa }}</td>
            <td>{{ vehiculo.marca }}</td>
            <td><button>Ver</button></td>
            <td><button @click="eliminar(vehiculo.placa)" >Borrar</button></td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
import { obtenerFachada, eliminarFachada } from '@/clients/clietes';

export default {
    data(){
          return{
              placa:null,
              modelo:null,
              color:null,
              precio:null,
              vehiculos:[]
          }
          
      },
      methods:{
        async consultar(){
            const data = await obtenerFachada()
            this.vehiculos=data;
        },

        async eliminar(placa){
        const data = await eliminarFachada(placa);
        this.consultar();
        

    }, 
      }
    
};
</script>

<style scoped>
.container {

  align-items: center;
}


</style>