const { json } = require("express")
const express = require("express")
app = express()

app.set('view engine', 'ejs')

app.get("/", (req,res) => {
  console.log("Here")
  res.render("index.ejs", { text: "World"})
})

const userRouter = require("./routes/user")
app.use("/users", userRouter)

app.listen(3000)