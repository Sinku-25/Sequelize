import express from "express";
import userRouter from "./src/modules/users/user.routes.js"
import noteRouter from "./src/modules/notes/note.routes.js"
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(noteRouter);

app.listen(5000,()=>{
    console.log("Server is running.......");
})