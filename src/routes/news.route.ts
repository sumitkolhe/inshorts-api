import { Router } from 'express'
import { paginationSchema } from '../helpers/validator.helper'
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
    this.router.get(`${this.path}all`, paginationSchema, this.newsController.allNews)
    this.router.get(`${this.path}top`, paginationSchema, this.newsController.topNews)
    this.router.get(`${this.path}trending`, paginationSchema, this.newsController.trendingNews)
    this.router.get(`${this.path}topics`, this.newsController.trendingTopics)
    this.router.get(`${this.path}topics/:topic`, paginationSchema, this.newsController.topic)
  }
}
