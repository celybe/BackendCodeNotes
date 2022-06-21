import folderSchema from "./folder.js";

const spaceSchema = {
  Created_At: { type: Date, default: Date.now },
  Updated_At: { type: Date, default: Date.now },
  Title: {
    type: String,
    required: true,
    min: 1,
    max: 100,
    default: "Untitled",
  },
  Folders: { type: [folderSchema], default: undefined },
};

export default spaceSchema;
