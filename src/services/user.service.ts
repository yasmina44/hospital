import { UserRepository } from "../repositories/user.repository";


export class UserService {

private userRepository =
new UserRepository();


async createUser(data:any){

return this.userRepository.create(data);

}


async getUsers(){

return this.userRepository.findAll();

}


async getUser(id:number){

return this.userRepository.findById(id);

}


async deleteUser(id:number){

return this.userRepository.delete(id);

}

}