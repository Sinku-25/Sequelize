import {connection} from "../dbConnection.js";
import { DataTypes } from "sequelize";
import { userSchema } from "./user.model.js";
export const noteSchema = connection.define("note",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING(50)
    },
    content:{
        type:DataTypes.STRING(100)
    },
    userID:{
        type:DataTypes.INTEGER,
        references:{
            model:userSchema,
            key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
    }
})
noteSchema.belongsTo(userSchema, { foreignKey: "userID" });
connection.sync();