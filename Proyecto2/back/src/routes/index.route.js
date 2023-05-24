import { Router } from "express"
import {login, CambiarContra} from '../controllers/index.controller'

const router = Router()

router.post('/login', login)
router.put('/CambiarContra',CambiarContra)
export default router