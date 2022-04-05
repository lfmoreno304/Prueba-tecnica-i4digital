import { Router } from "express"
import { getUsers, getAlbum } from "../controllers/users.controller"

const userRouter = Router();

userRouter.get('/users', getUsers)
userRouter.get('/users/:id', getAlbum)

export default userRouter