import { Response } from 'express'
import { handleHttp } from '../utils/error.handler'
import { RequestExt } from '../interfaces/requestExt.interface'

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: 'This data is just for user with active session / jwt',
      user: req.user
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_BLOGS')
  }
}

export { getItems }
