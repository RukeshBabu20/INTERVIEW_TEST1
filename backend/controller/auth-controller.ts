import { NextFunction, Request, Response } from "express";
import * as authService from "../services/auth-service";
import { createUser, findUser } from "../services/auth-service";

export const createData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await authService.createService(req.body);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to create data" });
  }
};

export const register = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const existingUser = findUser(username);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await createUser(username, password);
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Failed to create data" });
  }
};
