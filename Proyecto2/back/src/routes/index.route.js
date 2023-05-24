import { Router } from "express"
import {login, CambiarContraseña} from '../controllers/index.controller'

const router = Router()

router.post('/login', login)
router.put('/CambiarContraseña',CambiarContraseña)
export default router