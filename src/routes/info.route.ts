import { InfoController } from 'controllers/info.controller'
import { Router } from 'express'
import type { Routes } from '../interfaces/routes.interface'

export class InfoRoute implements Routes {
  public path = '/'
  public router = Router()
  public infoController = new InfoController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.infoController.info)
  }
}
