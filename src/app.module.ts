import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasController } from './tareas/tareas.controller';
import { TareasService } from './tareas/tareas.service';
import { TareasModule } from './tareas/tareas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TareasModule, MongooseModule.forRoot('mongodb://localhost/nestjs', {
    useNewUrlParser: true,
  })],
  controllers: [AppController, TareasController],
  providers: [AppService, TareasService],
})
export class AppModule {}
