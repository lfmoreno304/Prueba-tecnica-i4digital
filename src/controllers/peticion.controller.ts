import { Handler } from "express"
import Peticion from "../models/peticion"

export const getPeticiones: Handler = async (req,res) =>{
    const peticiones = await Peticion.find()
    return res.json(peticiones)
}
export const updatePeticion: Handler = async (req, res) => {
    const updatedPeticion = await Peticion.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.json(updatedPeticion)
}

export const deletePeticion: Handler = async (req,res) =>{
    const deletedPeticion = await Peticion.findByIdAndDelete(req.params.id)
    return res.sendStatus(204)
}

export const encodePeticiones: Handler = async (req,res) =>{
    const peticiones = await Peticion.find()
    const peticionesStr = JSON.stringify(peticiones)
    const peticionesB64 = Buffer.from(peticionesStr).toString("base64")
    res.send(peticionesB64)
}