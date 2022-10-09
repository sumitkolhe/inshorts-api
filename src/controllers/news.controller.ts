import { NewsService } from '../services/news.service'
import type { TopicsMetaResponse } from '../interfaces/topics'
import type { NewsItemResponse } from '../interfaces/news'
import type { CustomResponse } from '../interfaces/response'
import type { NextFunction, Request, Response } from 'express'

export class NewsController {
  private newsService: NewsService

  constructor() {
    this.newsService = new NewsService()
  }

  public allNews = async (
    req: Request,
    res: Response<CustomResponse<NewsItemResponse[]>>,
    next: NextFunction
  ) => {
    try {
      const { offset, limit } = req.query

      const response = await this.newsService.getAllNews(Number(offset), Number(limit))

      res.status(200).json({ status: 'SUCCESS', message: null, data: response })
    } catch (error) {
      next(error)
    }
  }

  public topNews = async (
    req: Request,
    res: Response<CustomResponse<NewsItemResponse[]>>,
    next: NextFunction
  ) => {
    try {
      const { offset, limit } = req.query

      const response = await this.newsService.getTopNews(Number(offset), Number(limit))

      res.status(200).json({ status: 'SUCCESS', message: null, data: response })
    } catch (error) {
      next(error)
    }
  }

  public trendingNews = async (
    req: Request,
    res: Response<CustomResponse<NewsItemResponse[]>>,
    next: NextFunction
  ) => {
    try {
      const { offset, limit } = req.query

      const response = await this.newsService.getTrendingNews(Number(offset), Number(limit))

      res.status(200).json({ status: 'SUCCESS', message: null, data: response })
    } catch (error) {
      next(error)
    }
  }

  public trendingTopics = async (
    req: Request,
    res: Response<CustomResponse<TopicsMetaResponse[]>>,
    next: NextFunction
  ) => {
    try {
      const response = await this.newsService.getTrendingTopics()

      res.status(200).json({ status: 'SUCCESS', message: null, data: response })
    } catch (error) {
      next(error)
    }
  }

  public topic = async (
    req: Request,
    res: Response<CustomResponse<NewsItemResponse[]>>,
    next: NextFunction
  ) => {
    try {
      const { topic } = req.params
      const { offset, limit } = req.query

      const response = await this.newsService.getTopicNews(topic, Number(offset), Number(limit))

      res.status(200).json({ status: 'SUCCESS', message: null, data: response })
    } catch (error) {
      next(error)
    }
  }
}
