import express from "express";
import {singUp,signIn,getAllUsers,deleteUser, updateUser, searchUser, searchUserAge, searchUserId, searchAge } from "./controllers/user.controller.js";
const router = express.Router();


router.get("/",getAllUsers)

router.post("/signUp",singUp)

router.post("/signIn",signIn)

 router.delete("/deleteUser/:id",deleteUser )

router.put("/updateUser",updateUser)

router.get("/searchUser",searchUser)

router.get("/searchUserAge",searchUserAge)

router.get("/searchUserId",searchUserId)

router.get("/searchAge",searchAge)

 export default router ;