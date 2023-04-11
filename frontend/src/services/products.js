import axios from "axios";

const url = "http://192.168.100.5:3001/api/products";

export function getProducts() {
  return axios.get(url).then((response) => {
    const { data } = response;
    return data;
  });
}
