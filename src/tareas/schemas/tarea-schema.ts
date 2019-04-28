import { Schema } from 'mongoose';

export const TareaSchema = new Schema({
    titulo: String,
    descripion: String,
    terminada: Boolean,
});
