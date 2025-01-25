import express from "express";

const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
//   res.send('Hello World!')

 res.status(200).json({"name":"beomgyu","position":"visual center","age":23});
})


app.post("/register",(req,res)=>{

    console.log(req.body);
    const{username,email,password}=req.body;
    res.status(200).json({username,email,password});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})