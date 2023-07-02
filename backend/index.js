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
// Phải có tuyến đường ko thì lỗi cannot get api
app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)
app.use("/api/posts",postRouter)


app.listen(8800,()=>{
    console.log("Backend đang chạy");
})