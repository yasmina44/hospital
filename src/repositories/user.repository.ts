import User from "../models/user.model";


export class UserRepository{


async create(data:any){

 return await User.create(data);

}


async findAll(){

 return await User.findAll();

}


async findById(id:number){

 return await User.findByPk(id);

}


async delete(id:number){

 return await User.destroy({
    where:{id}
 })

}


}