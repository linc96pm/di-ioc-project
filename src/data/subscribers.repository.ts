import { injectable } from 'inversify'
import { DBService } from './db.service'

@injectable()
export class SubscribersRepository {
  constructor(private readonly _dbContext: DBService) {}

  async all() {
    return this._dbContext.subscribers.find({})
  }

  async findOne(id: string) {
    return this._dbContext.subscribers.findById(id)
  }

  async create(payload: any) {
    return this._dbContext.subscribers.create(payload)
  }

  async updateOne(subscriber: any, payload: any) {
    subscriber.name = payload.name
    subscriber.subscribedToChannel = payload.subscribedToChannel

    return subscriber.save()
  }

  async deleteOne(id: any) {
    return this._dbContext.subscribers.deleteOne({ _id: id })
  }
}
