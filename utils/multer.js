import multer from "multer";
import path from "path";

const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext === ".jpg" || ext === ".jpeg" || ext === ".PNG") {
      cb(null, true);
      return;
    } else cb(new Error("File type is not supported"), false);
  },
});
export default upload;
