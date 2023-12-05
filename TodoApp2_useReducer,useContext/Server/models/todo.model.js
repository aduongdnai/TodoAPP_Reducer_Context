import genericModel from "./generic.model.js";
import db from "../utils/db.js";
const todoModel = {
    ...genericModel("todo", "todo_id"),
    findAllByUserID(id) {
        return db("todo").where("user_id", id)
    }
}
export default todoModel;