import { NewsService } from '../services/news.service'
import type { NextFunction, Request, Response } from 'express'

export class NewsController {
  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newsService = new NewsService()

      const r = await newsService.getAllNews()
      res.json(r)
    } catch (error) {
      next(error)
    }
  }
}
