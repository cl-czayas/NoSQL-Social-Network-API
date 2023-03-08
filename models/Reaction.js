const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['like', 'love', 'dislike'],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  thoughts: {
    type: Schema.Types.ObjectId,
    ref: 'Thought',
    required: true,
  },
});

//Initialize our Reaction model
const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;