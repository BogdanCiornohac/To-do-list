const express = require('express')
const cors = require("cors");



const app = express()
app.use(cors());

app.get("/api", (req, res) => {
    res.json({ "users": ["ceva", "Lorem", "Ipsun", "alin","Dorm","make laba"] })
})

app.listen(5000, () => { console.log("Server started on port 5000") })