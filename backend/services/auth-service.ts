import authModel from "../models/auth-model";
import { authType } from "../interface/types";

export const createService = async (data: authType) => {
  return await authModel.create(data);
};

export const showService = async () => {
  return await authModel.find();
};

export const showIdService = async (id: string) => {
  return await authModel.findById(id);
};

export const updateService = async (id: string, data: authType) => {
  return await authModel.findByIdAndUpdate(id, data);
};

export const deleteService = async (id: string) => {
  return await authModel.findByIdAndDelete(id);
};
