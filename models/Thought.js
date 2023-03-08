const { Schema, model } = require('mongoose');

// Schema to create thoughts model
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,

  },
  username: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reactions: [{
    type: Schema.Types.ObjectId,
    ref: 'Reaction',
  }],
});

// Initialize our Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
