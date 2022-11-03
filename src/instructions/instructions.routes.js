const router = require('express').Router()
const passport = require('passport')
const instructionsServices = require('./instructions.services')

require('../middlewares/auth.middleware')(passport)

router.route('/')
  .get(instructionsServices.getAllInstructions)
  .post(
    passport.authenticate('jwt', {session: false}),
    instructionsServices.postInstruction)

router.route('/:instructions_id')
  .get(instructionsServices.getInstructionById)
  .patch(
    passport.authenticate('jwt', {session: false}),
    instructionsServices.patchInstruction)
  .delete(
    passport.authenticate('jwt', {session: false}),
    instructionsServices.deleteInstruction)

    module.exports = router