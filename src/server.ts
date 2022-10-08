import { InfoRoute } from './routes/info.route'
import { App } from './app'
import { NewsRoute } from './routes/news.route'

const app = new App([new NewsRoute(), new InfoRoute()])

app.listen()
