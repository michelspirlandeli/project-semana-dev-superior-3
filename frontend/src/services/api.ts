
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://app-sds3.herokuapp.com/'
});