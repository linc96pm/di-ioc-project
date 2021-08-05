import { injectable } from 'inversify'
import mongoose from 'mongoose'
import { subscriberSchema } from './subscriber.model'

@injectable()
export class DBService {
  private _db: typeof mongoose
  async connect() {
    this._db = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('connected to DB')
  }

  get subscribers() {
    return this._db.model('Subscriber', subscriberSchema)
  }
}
