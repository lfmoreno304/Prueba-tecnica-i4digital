import { Router } from "express";
import {getPeticiones, deletePeticion, updatePeticion, encodePeticiones} from '../controllers/peticion.controller'

const peticionRouter= Router()

peticionRouter.get('/peticion',getPeticiones)
peticionRouter.delete('/peticion/:id',deletePeticion)
peticionRouter.put('/peticion/:id',updatePeticion)
peticionRouter.get('/peticion64',encodePeticiones)
export default peticionRouter