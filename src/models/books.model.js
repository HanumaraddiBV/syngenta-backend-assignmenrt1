const mongoose = require("mongoose");

const LibraryDataSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: [{ type: String, required: false }],
    status: { type: String, required: false },
    ordered_date: { type: String, required: false },
    return_date: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Data = mongoose.model("book", LibraryDataSchema)
module.exports = Data;