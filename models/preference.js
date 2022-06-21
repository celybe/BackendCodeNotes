const preferenceSchema = {
  Created_At: { type: Date, default: Date.now },
  Updated_At: { type: Date, default: Date.now },
  Theme: { type: String, default: "light" },
  Newsletter: { type: Boolean, default: false },
  Static_Sidebar: { type: Boolean, default: false },
  Notifications: { type: Boolean, default: false },
};

export default preferenceSchema;
