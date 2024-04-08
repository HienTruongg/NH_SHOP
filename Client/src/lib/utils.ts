import axios from "axios";
const CLOUDINARY_NAME = "dgk9gps1i";
const CLOUDINARY_UPLOAD_PRESET = "fobqfj0q";
const CLOUDINARY_FOLDER = "ImgaeUpload_webapp";

export async function uploadImage(file: File) {
  // console.log(file);

  const fromData = new FormData();
  fromData.append("file", file);
  fromData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  fromData.append("folder", CLOUDINARY_FOLDER);
  try {
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
      fromData
    );
    if (res.status === 200) {
      return res.data;
    } else {
      console.log("Error in file upload", res.statusText);
    }
  } catch (error) {
    console.error("Error in file upload", error);
  }
}
