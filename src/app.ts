import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { PORT } from './config'
import userRouter from './routes/users.route'
import postsRouter from './routes/posts.route'
import peticionRouter from './routes/peticion.route'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { options } from './swaggerOptions'
const app = express()
app.set('port', PORT || 3000)
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
const spec = swaggerJSDoc(options)
app.use(userRouter)
app.use(postsRouter)
app.use(peticionRouter)
app.use('/docs',swaggerUi.serve,swaggerUi.setup(spec))

export default app