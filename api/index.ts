import { App } from '../src/app.js'
import { NewsRoute } from '../src/routes/news.route.js'

const app = new App([new NewsRoute()])

export default app.getServer()
