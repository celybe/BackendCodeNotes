import documentSchema from "./document.js";

const folderSchema = {
  Created_At: { type: Date, default: Date.now },
  Updated_At: { type: Date, default: Date.now },
  Title: {
    type: String,
    required: true,
    min: 1,
    max: 100,
    default: "Untitled",
  },
  Documents: { type: [documentSchema], default: undefined },
};

export default folderSchema;
