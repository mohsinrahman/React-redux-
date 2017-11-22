import {
  GET_DATA}  from "../actionType/actionType.js";


import axios from "axios";

const getData = () =>{
  const url = "http://content.k-mit.se/api/collections/get/sections?token=5b94656b7c63ee6e3e8ffc3d7b7892";
  const request = axios.get(url);
  return {
    type:GET_DATA,
    payload: request
  };
};

export {getData};
