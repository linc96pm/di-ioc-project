import mongoose from 'mongoose'

export const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedToChannel: {
    type: String,
    required: true,
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
})

export const subscribersModel = mongoose.model('Subscriber', subscriberSchema)
