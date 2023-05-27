const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const data = require("./data.json")

app.get("/api", (req, res) => {
    res.json(data)
})

app.post("/api",(req,res)=>{
    const { text, done } = req.body;
    data.toDo.push({ text,done }) 
    console.log('Received data:', { text, done });
    
    fs.writeFile('./data.json', JSON.stringify(data), 'utf8', (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
        }
        res.send('JSON file rewritten successfully');
      });

    res.json(data);
})

app.delete("/api", (req,res) =>{
  const {index} = req.body;
  const parsedIndex = parseInt(index);

  

  data.toDo.splice(parsedIndex,1)


  fs.writeFile('./data.json', JSON.stringify(data), 'utf8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    res.send('JSON file rewritten successfully');
  });

  res.json(data);
})

app.put("/api", (req,res)=>{
  const {index,text} = req.body;
  const parsedIndex = parseInt(index);
  const done = true;
  
  data.toDo.splice(parsedIndex,1,{text,done});
  

   fs.writeFile('./data.json', JSON.stringify(data), 'utf8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    res.send('JSON file rewritten successfully');
  });
  res.json(data);

})

app.listen(5000, () => { console.log("Server started on port 5000") })