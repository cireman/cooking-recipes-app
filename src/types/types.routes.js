const router = require('express').Router()
const typesServices = require('./types.services')
const passport = require('passport')

require('../middlewares/auth.middleware')(passport)

router.route('/')
  .get(typesServices.getAllTypes)
  .post(
    passport.authenticate('jwt', {session: false}),
    typesServices.postType
    )

router.route('/:type_id')
  .get(typesServices.getTypeById)
  .delete(
    passport.authenticate('jwt', {session: false}),
    typesServices.deleteType
    )

    module.exports = router