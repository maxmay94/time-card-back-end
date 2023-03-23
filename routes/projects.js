import { Router } from 'express'
import * as projectsCtrl from '../controllers/projects.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


/*---------- Public Routes ----------*/

router.get('/:id', projectsCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, projectsCtrl.create)
router.post('/clock-in/:id', checkAuth, projectsCtrl.clockIn)
router.post('/clock-out/:id', checkAuth, projectsCtrl.clockOut)
router.patch('/:id', checkAuth, projectsCtrl.update)
router.delete('/:id', checkAuth, projectsCtrl.delete)

export { router }