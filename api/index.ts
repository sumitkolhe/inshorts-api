import { InfoRoute } from '../src/routes/info.route'
import { App } from '../src/app'
import { NewsRoute } from '../src/routes/news.route'

const app = new App([new NewsRoute(), new InfoRoute()])

export default app.getServer()
