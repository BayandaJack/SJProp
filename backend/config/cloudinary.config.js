const cloudinary = require('cloudinary').v2;
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
    cloud_name: 'dtqxbdp8p',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

// Multer storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "sjprop-listings",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };