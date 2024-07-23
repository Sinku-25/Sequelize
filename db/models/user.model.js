import {connection} from "../dbConnection.js";
import { DataTypes } from "sequelize";
export const userSchema = connection.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(50)
    },
    email:{
        type:DataTypes.STRING(100)
    },
    password:{
        type:DataTypes.STRING(100)
    },
    age:{
        type:DataTypes.INTEGER
    }
})
connection.sync();