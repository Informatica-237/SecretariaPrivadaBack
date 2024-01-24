import { Module } from '@nestjs/common';
import { DatosService } from './datos.service';
import { DatosController } from './datos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dato } from './entities/dato.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Dato])],
  controllers: [DatosController],
  providers: [DatosService],
})
export class DatosModule {}
