import axios from "axios";

const api = axios.create({
  baseURL: "https://moko-tatto-api.herokuapp.com",
});

export async function getApi(rota) {
  const response = await api.get(rota);
  return response.data.resultado;
}
export async function delApi(rota, id) {
  await api.delete(`${rota}/${id}`);
}
export async function postApi(rota,obj) {
  await api.post(rota, obj)
}
export async function putApi(rota, id, obj) {
  await api.put(`${rota}/${id}`, obj)
}