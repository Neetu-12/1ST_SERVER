const http=require("http")
http.createServer((req,res)=>{
    res.write("hello world")
    res.end()
})
.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the 8000 port no. ");
})
