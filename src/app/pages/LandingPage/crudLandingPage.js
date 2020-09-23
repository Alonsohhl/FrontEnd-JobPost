import axios from "axios";
const env = process.env.NODE_ENV || "development";
const config = require("../../../config/config.json")[env];

export const GET_OFERTAS_EMPLEO_URL = `${config.api_url}api/OfertaLaboral/pagination`;

export function getOfertasEmpleo(params = {}) {
  return axios.get(GET_OFERTAS_EMPLEO_URL);
}
