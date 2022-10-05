import { Router } from 'express'
import { NewsController } from '../controllers/news.controller'
import type { Routes } from '../interfaces/routes.interface'

export class NewsRoute implements Routes {
  public path = '/'
  public router = Router()
  public newsController = new NewsController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(this.path, this.newsController.index)
  }
}
