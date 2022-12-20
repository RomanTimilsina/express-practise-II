const { json } = require("express")
const express = require("express")
app = express()

app.set('view engine', 'ejs')

app.get("/", logger, logger, (req,res) => {
  res.render("index.ejs", { text: "World"})
})


const userRouter = require("./routes/user")
app.use("/users", userRouter)

function logger(req, res, next){
  console.log(req.originalUrl)
  next()
}

app.listen(3000)
