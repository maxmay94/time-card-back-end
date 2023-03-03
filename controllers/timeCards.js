import { TimeCard } from '../models/timeCard.js'

const index = async(req, res) => {
  try {
    const timeCards = await TimeCard.find({})
    res.json(timeCards)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const create = async(req, res) => {
  try {
    const timeCard = await TimeCard.create(req.body)
    res.status(201).json(timeCard)
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