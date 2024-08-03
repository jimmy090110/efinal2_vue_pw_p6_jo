import axios from "axios";


const guardar = async(vehiculobody) =>{

    const data = axios.post(`http://localhost:8080/API/v1.0/Consesionario/vehiculos`,vehiculobody).then(r=>r.data);
    return data;
}
const obtener= async()=>{
    const data = axios.get(`http://localhost:8080/API/v1.0/Consesionario/vehiculos`).then(r=>r.data);
    return data;
}
const eliminar = async(placa)=>{
    const data = axios.delete(`http://localhost:8080/API/v1.0/Consesionario/vehiculos/${placa}`).then(r=>r.data);
    return data;
}



export const  guardarFachada = async(vehiculobody) =>{
    return guardar(vehiculobody)
}

export const obtenerFachada = async () => {
    return obtener();
};

export const eliminarFachada = async (placa) => {
    return eliminar(placa);
};