import { Module } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TareaSchema } from './schemas/tarea-schema';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'tarea', schema: TareaSchema,
    }])],
    controllers: [TareasController],
    providers: [TareasService],
})
export class TareasModule {}
