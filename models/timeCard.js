import mongoose from 'mongoose'

const Schema = mongoose.Schema

const timeCardSchema = new Schema({
  date: [{
    type: Date,
    required: true,
  }],
  time: [{
    type: Number,
    required: true,
  }],
  description: String,

  // Add a reference to the Project model
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
  },
})

const TimeCard = mongoose.model('TimeCard', timeCardSchema)

export { TimeCard }