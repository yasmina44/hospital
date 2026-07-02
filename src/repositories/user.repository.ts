import User from "../models/User";
import { IUser } from "../interfaces/user.interface";
import { Types } from "mongoose";

export class UserRepository {

  // CREATE
  async create(userData: IUser) {
    const user = await User.create(userData);
    return user;
  }


  // READ ALL
  async findAll() {
    const users = await User.find();
    return users;
  }


  // READ ONE BY ID
  async findById(id: string) {

    if (!Types.ObjectId.isValid(id)) {
      return null;
    }

    const user = await User.findById(id);
    return user;
  }


  // READ ONE BY EMAIL
  async findByEmail(email: string) {

    const user = await User.findOne({
      email
    });

    return user;
  }


  // UPDATE
  async update(
    id: string,
    userData: Partial<IUser>
  ) {

    if (!Types.ObjectId.isValid(id)) {
      return null;
    }

    const updatedUser =
      await User.findByIdAndUpdate(
        id,
        userData,
        {
          new: true,
          runValidators: true
        }
      );

    return updatedUser;
  }



  // DELETE
  async delete(id: string) {

    if (!Types.ObjectId.isValid(id)) {
      return null;
    }

    const deletedUser =
      await User.findByIdAndDelete(id);

    return deletedUser;
  }



  // COUNT USERS
  async count() {

    const total =
      await User.countDocuments();

    return total;
  }



  // SEARCH USERS
  async search(keyword: string) {

    const users =
      await User.find({
        $or: [
          {
            firstName: {
              $regex: keyword,
              $options: "i"
            }
          },
          {
            lastName: {
              $regex: keyword,
              $options: "i"
            }
          },
          {
            email: {
              $regex: keyword,
              $options: "i"
            }
          }
        ]
      });


    return users;
  }

}