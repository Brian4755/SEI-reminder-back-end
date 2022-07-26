import { Router } from 'express'
import * as remindersCtrl from '../controllers/reminders.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, remindersCtrl.create)

export { router }
