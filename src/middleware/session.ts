import { NextFunction, Response } from 'express'
import { verifyToken } from '../utils/jwt.handler'
import { RequestExt } from '../interfaces/requestExt.interface'

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req?.headers?.authorization !== null && req?.headers?.authorization !== undefined ? req.headers.authorization : ''
    const jwt = jwtByUser.split(' ').pop()
    const isUser = verifyToken(`${jwt}`) as { id: string }
    if (!isUser) {
      res.status(401)
      res.send('INVALID_JWT')
    } else {
      req.user = isUser
      next()
    }
  } catch (e) {
    res.status(400)
    res.send('INVALID_SESSION')
  }
}

export { checkJWT }
