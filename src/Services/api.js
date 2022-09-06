import axios from "axios";

const api = axios.create({
  baseURL: "https://moko-tatto-api.herokuapp.com",
});
export async function getApi(rota) {
  const response = await api.get(rota);
  return response.data.resultado;
}
export async function delClientes(id) {
  const response = await api.delete(`/clientes/${id}`);
  return response.data;
}
export async function postCliente(obj) {
  const response = await api.post("/clientes", obj)
  return response
}
export async function putCliente(id, obj) {
  const response = await api.put(`/clientes/${id}`, obj)
  return response
}


export async function getNoticias() {
  const response = await api.get("/noticias");
  return response.data.resultado;
}


export async function getTattos(){
  const response = await api.get("/tatuagens")
  return response.data.resultado;
}