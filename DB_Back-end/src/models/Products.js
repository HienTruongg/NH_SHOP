import mongoose, { Schema } from "mongoose";
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    gallery: {
      type: Array,
    },

    discount: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      default: 0,
    },
    tags: {
      type: Array,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Product", productSchema);
