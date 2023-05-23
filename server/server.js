const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser');
const data = require("./data.json")


const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json(data)
})

app.post("/api",(req,res)=>{
    const { text, done } = req.body;
    data.toDo.push({ text,done }) 
    console.log('Received data:', { text, done });
    res.json(data);
})

app.listen(5000, () => { console.log("Server started on port 5000") })