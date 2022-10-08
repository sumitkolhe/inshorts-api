import { App } from '../src/app'
import { NewsRoute } from '../src/routes/news.route'

const app = new App([new NewsRoute()])

export default app.getServer()
