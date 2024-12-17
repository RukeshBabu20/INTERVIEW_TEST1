import authModel from "../models/auth-model";
import bcrypt from "bcryptjs";
import { authType } from "../interface/types";

export const createService = async (data: authType) => {
  return await authModel.create(data);
};

interface User {
  username: string;
  password: string;
}

const users: User[] = [];

// Create a new user
export const createUser = async (username: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: User = { username, password: hashedPassword };
  users.push(newUser);
  return newUser;
};

// Find user by username
export const findUser = (email: string) => {
  return authModel.find((user: any) => user.email === email);
};
