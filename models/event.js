const eventSchema = {
  Created_At: { type: Date, default: Date.now },
  Updated_At: { type: Date, default: Date.now },
  Subject: {
    type: String,
    required: true,
    min: 1,
    max: 100,
    default: "Untitled",
  },
  StartTime: { type: Date },
  EndTime: { type: Date },
  Description: { type: String },
  CategoryColor: { type: String },
};

export default eventSchema;
