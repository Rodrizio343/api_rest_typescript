import { Router } from 'express'
import { getItems } from '../controllers/order'
import { checkJWT } from '../middleware/session'

// Esta ruta solo es accesible por usuarios que tengan sesion activa
const router = Router()

router.get('/', checkJWT, getItems)

export { router }
