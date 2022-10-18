import path from 'path'
import type { NextFunction, Request, Response } from 'express'

export class InfoController {
  public info = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'))
    } catch (error) {
      next(error)
    }
  }
}
