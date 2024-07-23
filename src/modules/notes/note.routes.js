import express from 'express';
import { getAllNotes,addNote,deleteNote, updateNote ,getAll_include } from './controllers/note.controller.js'; 
 const router = express.Router();


 router.get("/notes",getAllNotes)

 router.post("/notes/addNote",addNote)

router.delete("/notes/deleteNote",deleteNote)

router.put("/notes/updateNote",updateNote)

router.get("/notes/getAll_include",getAll_include)


 export default router;



 /*
 -Notes APIs-
1- 
2- 
3- 
4- 
5- 
*/