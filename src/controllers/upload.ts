import { Request, Response } from 'express'
import dbConnect from '../config/mongo'
import { RequestExt } from '../interfaces/requestExt.interface'
import { Storage } from '../interfaces/storage.interface'
import { handleHttp } from '../utils/error.handler'
import { registerUpload } from '../services/storage'

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`
    }
    const response = await registerUpload(dataToRegister)
    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_BLOG')
  }
}

export { getFile }
