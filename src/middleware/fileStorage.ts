import multer from "multer";
const path = require("path");
const fs = require("fs");

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const tempDir = path.join(__dirname, "temp");
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const memoryStorage = multer.memoryStorage();
const upload = multer({ storage: memoryStorage });

export { upload, diskStorage, memoryStorage };
