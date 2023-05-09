import { Router } from "express"
import { loginPage, loginPostFunction } from '../controllers/index.controller'

const router = Router()

//landing page view
router.get('/', (req, res) => {
    console.log('redirecting root to index (login page)')
    res.redirect('/login')
})

router.get('/login', loginPage)

router.post('/login', loginPostFunction)

export default router