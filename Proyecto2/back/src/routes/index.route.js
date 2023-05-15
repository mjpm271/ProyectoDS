import { Router } from "express"
import {login} from '../controllers/index.controller'

const router = Router()

router.post('/login', login)

export default router