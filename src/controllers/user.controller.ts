import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const service = new UserService();


// CREATE USER
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await service.createUser(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL USERS
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await service.getUsers();

    res.status(200).json({
      success: true,
      data: users,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET SINGLE USER
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await service.getUser(
      req.params.id as string
    );

    res.status(200).json({
      success: true,
      data: user,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE USER
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await service.updateUser(
      req.params.id as string,
      req.body
    );

    res.status(200).json({
      success: true,
      data: user,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE USER
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await service.deleteUser(
      req.params.id as string
    );

    res.status(200).json({
      success: true,
      data: user,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};