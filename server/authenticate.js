function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401) // restricted access, you are not allowed.
      return res.send('Not allowed here, bud. Go on, get!')
    }

    next()
  }
}

module.exports = {
  authRole
}
