const router = require("express").Router()
const {restricted } = require('../auth/auth-middleware');
const Users = require("./users-model.js")

router.get('/', restricted, async (req, res, next) => {
  try {
    const users = await Users.find()
    res.json(users);
  } catch(err) {
    next(err)
  }
})

module.exports = router
