import { Handler } from "express"
import { getUserstRequests,  getAlbumRequest} from "../api/users"
import Peticion from "../models/peticion"

export const getUsers: Handler = async (req,res) =>{
    const users = await getUserstRequests()
    const peticion = new Peticion()
    const date = new Date()
    peticion.date = date.toDateString()
    peticion.method = req.method
    peticion.data= users.data
    await peticion.save()
    return res.send(users.data)
}

export const getAlbum: Handler = async (req,res) =>{
    const albums = await getAlbumRequest(Number.parseInt(req.params.id))
    const peticion = new Peticion()
    const date = new Date()
    peticion.date = date.toDateString()
    peticion.method = req.method
    peticion.data= albums.data
    await peticion.save()
    return res.send(albums.data)
}