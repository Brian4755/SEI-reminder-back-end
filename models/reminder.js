import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reminderSchema = new Schema({
  priority: {type: Number, required: true},
  description: {type: String, required: true},
  time: {type: String},
  done: {type: Boolean},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Reminder = mongoose.model('Reminder', reminderSchema)

export {
  Reminder
}