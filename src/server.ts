import { App } from './app'
import { NewsRoute } from './routes/news.route'

const app = new App([new NewsRoute()])

app.listen()
