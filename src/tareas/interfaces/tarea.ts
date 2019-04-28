import { Document } from 'mongoose';

export interface Tarea extends Document {
    id?: string;
    titulo: string;
    descripion: string;
    terminada: boolean;
}
