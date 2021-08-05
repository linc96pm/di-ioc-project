import 'dotenv/config'
import 'reflect-metadata'
import { App } from './web/app'

import './web/controllers/subscribers.controller'

export async function bootstrap() {
  // container.get(App)
  new App().setup()
}
bootstrap()
