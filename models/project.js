import mongoose from 'mongoose'

const Schema = mongoose.Schema

const timeCardSchema = new Schema({
  in: [{
    type: Date,
    required: true,
  }],
  out: [{
    type: Date,
    required: true,
  }],
},{
  timestamps: true,
})

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  clockedIn: {
    type: Boolean,
    default: false,
  },
  description: String,
  // Add a reference to the Profile model
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
  },
  timeCard: [timeCardSchema],
},{
  timestamps: true,
})

const Project = mongoose.model('Project', projectSchema)

export { Project }