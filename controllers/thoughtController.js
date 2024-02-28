const {Thought, User} = require('../models');


module.exports = {
//get all thoughts
async getThoughts(req, res) {
try {
    const thoughts = await Thought.find();
    res.json(thoughts);
} catch (err) {
    res.status(500).json(err)
}
},

//get single thought the id
async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
}