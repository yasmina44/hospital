import User from "../models/user.model";


export class UserService {


  async createUser(data:any){

    const user = await User.create(data);

    return user;

  }



  async getUsers(){

    const users = await User.find();

    return users;

  }



  async getUser(id:string){

    const user = await User.findById(id);

    return user;

  }



  async updateUser(
    id:string,
    data:any
  ){

    const user = await User.findByIdAndUpdate(
      id,
      data,
      {new:true}
    );

    return user;

  }




  async deleteUser(id:string){

    const user = await User.findByIdAndDelete(id);

    return user;

  }


}