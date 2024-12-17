import axios from "axios";
import { authType, employeeType } from "../types/type";

const url = "http://localhost:3000/employee";

export const createData = async (data: employeeType[]) => {
  try {
    const response = await axios.post(url + "/create", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const showIdData = async (id: string) => {
  try {
    const response = await axios.get(url + `/show/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const showData = async () => {
  try {
    const response = await axios.get(url + "/show");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (id: string, data: employeeType) => {
  try {
    const response = await axios.put(url + `/update/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (id: string) => {
  try {
    const response = await axios.delete(url + `/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createOrderData = async (data: authType) => {
  try {
    const response = await axios.post(url + "/addProduct", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrderData = async (id: string) => {
  try {
    const response = await axios.delete(url + `/deleteProduct/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const showOrderData = async () => {
  try {
    const response = await axios.get(url + "/showProduct");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
