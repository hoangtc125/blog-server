import express from 'express'

import { HomeAPI } from '../core/api_config.js'
import { get_homepage, update_homepage } from '../controller/home_controller.js'

const router = express.Router()

router.get(HomeAPI.API.GET, get_homepage)
router.post(HomeAPI.API.UPDATE, update_homepage)

export default router