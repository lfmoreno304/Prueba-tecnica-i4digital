import { model, Schema, Document } from 'mongoose'

export interface IPeticion extends Document{
    date: String,
    data: Object,
    method: String
}

const peticionSchema = new Schema({
    date: {
        type: String,
        unique: false,
        required: true,
        trim: true
    },
    data: {
        type: Object,
        unique: false,
        required: false,
    },
    method: {
        type: String,
        unique: false,
        required: true,
        trim: true
    }
})

export default model<IPeticion>('Peticion',peticionSchema)