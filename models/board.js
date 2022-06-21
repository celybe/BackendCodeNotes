import columnSchema from "./column.js";

const boardSchema = {
  Created_At: { type: Date, default: Date.now },
  Updated_At: { type: Date, default: Date.now },
  Columns: [columnSchema],
};

export default boardSchema;
