import { Router } from "express"
import { VerActividadesPublicadas } from "../controllers/estudiante.controller"

const router = Router()

router.get('/VerActividadesPublicadas',VerActividadesPublicadas)

export default router