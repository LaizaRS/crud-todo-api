const express = require("express");
const todoRoutes = require("./routes/todos.routes"); 
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());
app.use(todoRoutes);

app.get("/im-alive", (req,res) => {
    return res. json("ok");
});

app.listen(3333, () => console.log("server up in 3333"));
