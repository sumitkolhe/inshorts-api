import type { NextFunction, Request, Response } from 'express'

export class InfoController {
  public info = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({
        status: 'SUCCESS',
        documentation: 'https://docs.inshorts.me',
        github: 'https://github.com/sumitkolhe/inshorts-api',
        author: 'Sumit Kolhe',
      })
    } catch (error) {
      next(error)
    }
  }
}
