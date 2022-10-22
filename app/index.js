import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'

import swaggerDocument from './swagger.json' assert {type: 'json'};
import middlewareDocument from '../resources/middleware.json' assert {type: 'json'}

import { SwaggerAPI, HomeAPI } from './core/api_config.js';
import home_router from './router/home_router.js'
import { end_time, filter, start_time } from './middleware/index.js';

const app = express()

app.use(SwaggerAPI.ROOT, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json({ limit: middlewareDocument.payload_limit }))
app.use(bodyParser.urlencoded({ extended: true, limit: middlewareDocument.payload_limit }))
app.use(cors())

app.use(filter)
app.use(HomeAPI.ROOT, start_time, home_router, end_time)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/docs`)
})