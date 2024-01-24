import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DatosService } from './datos.service';
import { CreateDatoDto } from './dto/create-dato.dto';
import { UpdateDatoDto } from './dto/update-dato.dto';
import { Dato } from './entities/dato.entity';

@Controller('datos')
export class DatosController {
  constructor(private readonly datosService: DatosService) {}

  @Post('crear')
  addDato(@Body() dato:CreateDatoDto ) : Promise<Dato>{
      return this.datosService.addDato(dato);
  }

  @Get('all')
  async getDatos(): Promise<Dato[]>{
    return this.datosService.getAll();
  }

  @Get(':id')
  async getId(@Param('id') id:number) : Promise<Dato>{
    return this.datosService.getId(id)
  }

  @Patch('actualizar/:id')
  updateDatoId(@Param('id')id:number, @Body() dato: CreateDatoDto) : Promise<Dato>{
    return this.datosService.updateDatoId(id,dato);
  }

  @Delete('eliminar/:id')
  deleteDato(@Param('id') id : number) : Promise<boolean> {
    return this.datosService.deleteDato(id);
  }
}
