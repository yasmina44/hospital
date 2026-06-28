import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config";


class User extends Model {}

User.init(
{
 id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
 },

 name:{
    type:DataTypes.STRING,
    allowNull:false
 },

 email:{
    type:DataTypes.STRING,
    unique:true
 }

},
{
 sequelize,
 tableName:"users",
 timestamps:true
}
)


export default User;