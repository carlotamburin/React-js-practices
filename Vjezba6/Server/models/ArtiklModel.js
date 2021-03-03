const mongoose = require("mongoose");

const { Schema } = mongoose;

const artiklModelSchema = new Schema({
  kategorija: String,
  items: [
    {
      id: String,
      podkategorija: String,
      info: String,
      products: [
        {
          id: String,
          name: String,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Artikli", artiklModelSchema, "artikli");
