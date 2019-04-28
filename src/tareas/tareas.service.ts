import { Injectable } from '@nestjs/common';
import { Tarea } from './interfaces/tarea';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TareasService {

    constructor(@InjectModel('tarea') private tareaModel: Model<Tarea>) {}

    async getTareas() {
        return await this.tareaModel.find();
    }

    async getTarea(id: string) {
        return await this.tareaModel.findById(id);
    }
}
