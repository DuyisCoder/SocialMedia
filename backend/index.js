// Khởi tạo
const express = require("express")
const app =express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const helmet=require('helmet')
const morgan=require('morgan')
// Khởi tạo tuyến đường
const userRouter =require('../backend/routes/users')
const authRouter =require('../backend/routes/auth')
const postRouter =require('../backend/routes/posts')
const multer =require("multer")
const path = require("path")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology:true,
})
  .then(() => {
    console.log('Kết nối thành công với MongoDB');
    // Thực hiện các hoạt động với cơ sở dữ liệu ở đây
  })
  .catch((error) => {
    console.error('Lỗi khi kết nối với MongoDB :', error.message);
  });
  // dùng trong upload file nhưng để lên đầu mới kh l
  
  
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("Common"))

app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})
app.get("/users",(req,res)=>{
    res.send("Welcome to users page")
})


// Upload file
const storage = multer.diskStorage({
  destination:(req,file,cb) =>{
    cb(null,"public/images");
  },
  filename:(req,file,cb) =>{
    cb(null,file.originalname)
  }
})
const upload = multer({ storage });

app.post("/api/upload",upload.single("file"),(req,res) => {
  try {
    return res.status(200).json("Đăng ảnh thành công")
  } catch (error) {
    console.log(error);

  }
})




// Phải có tuyến đường ko thì lỗi cannot get api
app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)
app.use("/api/posts",postRouter)



app.listen(8800,()=>{
    console.log("Backend đang chạy");
})