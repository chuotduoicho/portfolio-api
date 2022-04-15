const mongoose = require("mongoose");
const CertificateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    link: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: "",
    },
    photo: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Certificate", CertificateSchema);
