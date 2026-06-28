import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const service = new UserService();

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("BODY:", req.body);

    const user = await service.createUser(req.body);

    console.log("CREATED:", user);

    res.status(201).json(user);
  } catch (error) {
    console.error("ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error,
    });
  }
};

export const getUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await service.getUsers();

    res.status(200).json(users);
  } catch (error) {
    console.error("ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error,
    });
  }
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const user = await service.getUser(id);

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch user",
      error,
    });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    await service.deleteUser(id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete user",
      error,
    });
  }
};