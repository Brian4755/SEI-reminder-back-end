import { Reminder } from "../models/reminder.js"

function create(req, res) {
  req.body.owner = req.user.profile
  Reminder.create(req.body)
  .then(reminder => {
    Reminder.findById(reminder._id)
    .populate('owner')
    .then(populatedReminder => {
      res.json(populatedReminder)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export {
  create
}