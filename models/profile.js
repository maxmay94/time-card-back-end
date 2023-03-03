import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  projects: [{  
    // This is an array of project IDs
    type: Schema.Types.ObjectId,
    ref: 'Project',
  }],
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
