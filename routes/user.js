const express = require("express")
const router = express.Router()

router.get('', (req, res) => {
  res.send("Users list")
})

router.get('/new', (req, res) => {
  res.send("New Users")
})

router.post('/post', (req, res) => {
  res.send("Create User")
})

router.route('/:id')
.get( (req, res) => {
  res.send(`Get User with id: ${req.params.id}`)
})
.put(( req, res) => {
  res.send(`Update user with id ${req.params.id}`)
})
.delete(( req, res) => {
  res.send(`Delete user with id ${req.params.id}`)
})


module.exports = router