const router = require('express').Router()

const ingredientsServices = require('./ingredients.services')

const passport = require('passport')

require('../middlewares/auth.middleware')(passport)

router.route('/')
  .get(ingredientsServices.getAllIngredients)
  .post(
    passport.authenticate('jwt', {session: false}),
    ingredientsServices.postIngredient)


router.route('/:ingredient_id')
  .get(ingredientsServices.getIngredientById)
  .patch(
    passport.authenticate('jwt', {session: false}),
    ingredientsServices.patchIngredient)

module.exports = router