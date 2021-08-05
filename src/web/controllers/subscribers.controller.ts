import { NextFunction, Request, Response } from 'express'
import {
  controller,
  httpDelete,
  httpGet,
  httpPatch,
  httpPost,
} from 'inversify-express-utils'
import { SubscribersService } from '../../core/subscribers.service'

@controller('/subscribers')
export class SubscribersController {
  constructor(private readonly _subscribersService: SubscribersService) {}

  @httpGet('/')
  async index(req: Request, res: Response) {
    const subscribers = await this._subscribersService.all()

    res.json({
      data: [subscribers],
    })
  }

  @httpGet('/:id')
  async show(req: Request, res: Response) {
    const subscriber = await this._subscribersService.findOne(req.params.id)

    res.json({
      data: [subscriber],
    })
  }

  @httpPost('/')
  async store(req: Request, res: Response) {
    const subscriber = await this._subscribersService.create(req.body)

    res.status(201).json({
      data: [subscriber],
    })
  }

  @httpPatch('/:id')
  async update(req: Request, res: Response) {
    const updatedSubscriber = await this._subscribersService.updateOne(
      req.params.id,
      req.body
    )

    res.status(201).json({ data: { subscriber: updatedSubscriber } })
  }

  @httpDelete('/:id')
  async delete(req: Request, res: Response) {
    const subscriber = await this._subscribersService.findOne(req.params.id)

    if (subscriber == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' })
    }

    await this._subscribersService.deleteOne(req.params.id)
    res.status(201).json({ message: 'Deleted Subscriber' })
  }
}
