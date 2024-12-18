import axios from "axios";
import { AddEmployee, employeeType } from "../types/type";

const url = "http://localhost:3000/employee";

export const createData = async (data: AddEmployee, token: string) => {
  try {
    const response = await axios.post(url + "/create", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const showIdData = async (id: string, token: string) => {
  try {
    const response = await axios.get(url + `/show/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const showData = async (token: string) => {
  try {
    const response = await axios.get(url + "/show", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (
  id: string,
  data: employeeType,
  token: string
) => {
  try {
    const response = await axios.put(url + `/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (id: string, token: string) => {
  try {
    const response = await axios.delete(url + `/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data: any) => {
  try {
    const response = await axios.post(url + "/login", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (data: any) => {
  try {
    const response = await axios.post(url + "/register", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
