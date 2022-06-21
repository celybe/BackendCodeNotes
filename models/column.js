import taskSchema from "./task.js";

const columnSchema = {
  Name: String,
  Items: [taskSchema],
};

export default columnSchema;
