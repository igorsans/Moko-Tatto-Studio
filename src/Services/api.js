import axios from "axios";

const api = axios.create({
  baseURL: "https://moko-tatto-api.herokuapp.com",
});
export async function getClientes() {
  const response = await api.get("/clientes");
  return response.data;
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
  console.log(obj)
  const response = await api.put(`/clientes/${id}`, obj)
  return response
}
export async function getNoticias() {
  const response = await api.get("/noticias");
  console.log(response)
  return response.data.resultado;
}