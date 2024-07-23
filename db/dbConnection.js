import { Sequelize } from "sequelize";
export const connection = new Sequelize("assign 4","root","",{
   host:"localhost",
   dialect:"mysql"
})