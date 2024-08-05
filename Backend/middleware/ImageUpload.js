const multer = require("multer");
const SharpMulter = require("sharp-multer");

const newFilenameFunction = (og_filename, options) => {
  console.log(og_filename);
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

  const newname = uniqueSuffix + "." + options.fileFormat;
  console.log(newname);
  return newname;
};

const storage = SharpMulter({
  destination: (req, file, callback) => callback(null, "./tmp"),
  imageOptions: {
    fileFormat: "webp",
    quality: 100,
  },
  filename: newFilenameFunction, // optional
});

const upload = multer({
  storage: storage,
});

module.exports = upload;