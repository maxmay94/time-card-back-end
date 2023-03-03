import { Project } from '../models/project.js'

const index = async(req, res) => {
  try {
    const projects = await Project.find({})
    res.json(projects)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const create = async(req, res) => {
  // console.log(req.body)
  try {
    const project = await Project.create(req.body)
    res.status(201).json(project)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

// const update = async(req, res) => {

// }

// const deleteOne = async(req, res) => { }

export { 
  index, 
  create, 
  // update, 
  // deleteOne as delete 
}