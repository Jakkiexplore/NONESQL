const router = require('express').Router();
const {
  getThoughtById,
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/')
  .get(getThoughts)
  .post(createThought);

router.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

router.route('/:thoughtId/reactions')
  .post(createReaction)

  module.exports = router;