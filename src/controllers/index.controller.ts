import type { NextFunction, Request, Response } from 'express'

export class IndexController {
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).json({ hello: 'world' })
    } catch (error) {
      next(error)
    }
  }
}
