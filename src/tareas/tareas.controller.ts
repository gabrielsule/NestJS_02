import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { Tarea } from './interfaces/tarea';

@Controller('tareas')
export class TareasController {

    constructor(private service: TareasService) {}

    @Get()
    getTareas(): Promise<Tarea[]> {
        return this.service.getTareas();
    }

    @Get(':id')
    getTarea(@Param('id') id): Promise<Tarea> {
        return this.service.getTarea(id);
    }
}
