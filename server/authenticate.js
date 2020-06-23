function authRole(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next()
    } else {
      res.status(401) // restricted access, you are not allowed.
      return res.send('Not allowed here, bud. Go on, get!')
    }
  }
}

module.exports = {
  authRole
}
