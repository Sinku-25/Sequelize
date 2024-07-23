import { userSchema } from "../../../../db/models/user.model.js";
import { Op } from "sequelize";


// get all user 
export const getAllUsers = async (req, res) => {
   let users = await userSchema.findAll()
   res.json({ messsage: "done", users });

}

// sign up
export const singUp = async (req, res) => {
   let { name, email, password, age } = req.body;
   let existUser = await userSchema.findOne({
      where:{
        email
      }
   });
   if(existUser){
      res.json({messasge:"Account already exists. Please sign in."});
   }else{
      let users = await userSchema.create({name,email,password,age})
      res.json({message:"Created new account",users});
   }
}

// sign in
export const signIn = async(req,res)=>{
   let {email} = req.body;
   let users = await userSchema.findOne({
      where:{
         email
      }
      });
   if(users){
      res.json({message:"Login successfully"});
   }else{
      res.json({message:"Account not exist. please sign up."});
   }
}

// delete user
export const deleteUser = async (req, res) => {
   let { id } = req.params;
   let users = await userSchema.destroy({
      where: {
         id
      }
   });
   users ? res.json({ message: "user deleted", users }) : res.json({ message: "no users", users })

}

//update user 
export const updateUser = async (req, res) => {
   let { name, id } = req.body;
   let users = await userSchema.update({ name }, {
      where: {
         id
      }
   });
   users[0] ? res.json({ message: "user updated", users }) : res.json({ message: "user not exist", users })

}

// search for user where his name start with "a" and age less than 30 => using like for characters
export const searchUser = async (req, res) => {
   let users = await userSchema.findAll({
      where: {
         [Op.and]: [
            {
               name: {
                  [Op.like]: 'a%'
               }
            },
            {
               age: {
                  [Op.lt]: 30
               }
            }
         ]
      }
   });
   res.json({ message: "User founded", users });
}

// search for user where his age is between 20 and 30 
export const searchUserAge = async(req,res)=>{
   let users = await userSchema.findAll({
      where:{
         age:{
            [Op.between]:[20,30]
         }
      }
   });
   res.json({message:"user age founded",users});
}

// search for users by list of ids => using IN
export const searchUserId = async(req,res)=>{
   let users = await userSchema.findAll({
      where:{
         id:{
            [Op.in]:[1,2,3]
         }
      }
   });
   res.json({message:"user id founded",users});
}

// get the 3 oldest users(اكبر ٣ مستخدمين فى العمر)
export const searchAge = async(req,res)=>{
   let users  = await userSchema.findAll({
      order:[['age','DESC']],
      limit:3
   });
   res.json({message:"three users founded",users});
}