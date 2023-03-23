import { Project } from '../models/project.js'

const index = async(req, res) => {
  try {
    const projects = await Project.find({profile: req.params.id})
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

const deleteOne = async(req, res) => { 
  try{
    await Project.findByIdAndDelete(req.params.id)
    res.status(200).json({msg: 'Project deleted'}).end()
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const clockIn = async(req, res) => { 
  // console.log(req.body)
  try {
    const project = await Project.findById(req.params.id)
    if(project.clockedIn !== true) {
      project.clockedIn = true
      project.timeCard.push({in: req.body.in})
      // console.log(project)
      await project.save()
  
      res.status(200).json(project)
    }
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const clockOut = async(req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if(project.clockedIn === true){
      project.clockedIn = false
      project.timeCard[project.timeCard.length - 1].out = req.body.out
      await project.save()
  
      res.status(200).json(project)
    }

  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export {
  index, 
  create, 
  update,
  deleteOne as delete,
  clockIn,
  clockOut
}