import multer from "multer";

const storage=multer.diskStorage({  //diskStorage tells Multer to store uploaded files on your local file system (your server's disk).
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload=multer({storage})

export default upload