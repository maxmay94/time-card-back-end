import { Project } from '../models/project.js'

const index = async(req, res) => {
  console.log('PROJECTS CONTROLLER INDEX')
  console.log('req._id', req._id)
  try {
    const projects = await Project.find(req._id)
    res.json(projects)
    return res.status(200).json(projects)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const create = async(req, res) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json(project)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const update = async(req, res) => { }

const deleteOne = async(req, res) => { }

export { 
  index, 
  create, 
  update, 
  deleteOne as delete 
}