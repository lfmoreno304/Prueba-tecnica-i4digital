import { Handler } from "express"
import { getPostsRequests } from "../api/posts"
import Peticion from "../models/peticion"
export const getPosts: Handler = async (req,res) =>{
    const posts = await getPostsRequests()
    const peticion = new Peticion()
    const date = new Date()
    peticion.date = date.toDateString()
    peticion.method = req.method
    peticion.data= posts.data
    await peticion.save()
    return res.send(posts.data)
}