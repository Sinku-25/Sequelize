import { noteSchema } from "../../../../db/models/note.model.js";
import { userSchema } from "../../../../db/models/user.model.js";

// get all notes
export const getAllNotes = async(req, res) => {
    let notes = await noteSchema.findAll()
    res.json({ message: "good", notes })

}

// add note
export const addNote = async(req, res) => {
    let { title, content, userID } = req.body;
    let notes = await noteSchema.create({title,content,userID})
    res.json({messsage:"note added successfully",notes})
}

// delete note (note creator only )
export const deleteNote = async (req, res) => {
    let { id,userID } = req.body;
    let notes = await noteSchema.findOne({
       where: { id }
    });
    if(notes && notes.userID == userID){
        await notes.destroy()
        res.json({message:"Note Deleted"})
    }else{
        res.json({message:"user can not delete this note ."})
    }
    }

    // update note (note owner only)
 export const updateNote = async (req,res)=>{
    let {id,userID,title} = req.body;
    let notes = await noteSchema.findOne({
        where:{id}
    });
    if(notes && notes.userID ==  userID){
        await notes.update({title})
        res.json({message:"Note updated",notes});
    }else{
        res.json({message:"Can't update this note ",notes});
    }
 }

// get all notes with their owners informaion (using include)
 export const getAll_include = async (req, res) => {
    let notes = await noteSchema.findAll({ include: [userSchema], });
    res.json({ message: 'done', notes });
  }