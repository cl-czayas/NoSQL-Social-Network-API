const { Schema, model } = require('mongoose');
const {reactionSchema} = require('./Reaction')

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get:function(date){
        return new Date(date).toISOString()
      }
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    reactions: [{
      type: Schema.Types.ObjectId,
      ref: 'Reaction',
    }],
  },

  {
    toJSON: {
      getters: true,
    },
  }
);
thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;