import axios from 'axios';
import { toast } from 'react-toastify';

const config = {
  BASE_URL: 'http://localhost:3001/api',
};

const instance = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const get = async (location: string) => {
  return instance
    .get(config.BASE_URL + location)
    .then((response) => response.data)
    .catch((error) => {
      toast(error.response.data.message);
    });
};

export const post = async (location: string, body: any) => {
  return instance
    .post(config.BASE_URL + location, body)
    .then((response) => response.data)
    .catch((error) => {
      toast(error.response.data.message);
    });
};

export const put = async (location: string, body: any) => {
  return instance
    .put(config.BASE_URL + location, body)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export const del = async (location: string, body: any) => {
  return instance
    .delete(config.BASE_URL + location, {
      data: body,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};
