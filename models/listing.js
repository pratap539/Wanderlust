const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/low-angle-photo-of-coconut-trees-beside-body-of-water-ueBIGLmiI5A",
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/low-angle-photo-of-coconut-trees-beside-body-of-water-ueBIGLmiI5A"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;