import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, projectsCtrl.index)
router.post('/', checkAuth, projectsCtrl.create)
router.patch('/:id', checkAuth, projectsCtrl.update)
router.delete('/:id', checkAuth, projectsCtrl.delete)

module.exports = router