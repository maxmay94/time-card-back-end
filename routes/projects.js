import { Router } from 'express'
import * as projectsCtrl from '../controllers/projects.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, projectsCtrl.index)
router.post('/', checkAuth, projectsCtrl.create)
// router.patch('/:id', checkAuth, projectsCtrl.update)
// router.delete('/:id', checkAuth, projectsCtrl.delete)

export { router }