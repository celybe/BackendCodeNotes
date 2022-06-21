const documentSchema = {
  Created_At: { type: Date, default: Date.now },
  Updated_At: { type: Date, default: Date.now },
  Title: {
    type: String,
    required: true,
    min: 1,
    max: 100,
    default: "Untitled",
  },
  Content: { type: String, default: undefined },
};

export default documentSchema;
