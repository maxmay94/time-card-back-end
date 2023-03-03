import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, timeCardsCtrl.index)
router.post('/', checkAuth, timeCardsCtrl.create)
router.patch('/:id', checkAuth, timeCardsCtrl.update)
router.delete('/:id', checkAuth, timeCardsCtrl.delete)

module.exports = router