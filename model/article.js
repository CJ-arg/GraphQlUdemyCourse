const { Schema, model } = require("mongoose");
const atricleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = model("Article", atricleSchema);
