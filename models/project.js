import mongoose from 'mongoose'

const Schema = mongoose.Schema

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  // Add a reference to the Profile model
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
  },
},{
  timestamps: true,
})

const Project = mongoose.model('Project', projectSchema)

export { Project }