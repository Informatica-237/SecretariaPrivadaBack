import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDatoDto } from './dto/create-dato.dto';
import { UpdateDatoDto } from './dto/update-dato.dto';
import { Dato } from './entities/dato.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DatosService {
  constructor(@InjectRepository(Dato) private datoRepository: Repository<Dato>){}
  

  public async getAll():Promise<Dato[]>{
    return await this.datoRepository.find();
  }
  
  public async getId(id:number) : Promise<Dato>{
    try{
      const criterio : FindOneOptions =  { where: {id:id} }
      let dato : Dato = await this.datoRepository.findOne( criterio );
      if(dato)
        return dato;
      else
        throw new Error(`No se encontro ciudad con id: ${id}`);
    }
    catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

  public async addDato(datoDto: CreateDatoDto) : Promise<Dato>{
    
    try{

      let dato: Dato = await this.datoRepository.save(new Dato(datoDto.nombre,datoDto.apellido,datoDto.dni,datoDto.direccion,datoDto.cargo,datoDto.telefonos,datoDto.acciones, datoDto.auditar, datoDto.nSolicitud, datoDto.fecha,datoDto.temaAudiencia,datoDto.terreno,datoDto.anotado,datoDto.año,datoDto.tieneCasa,datoDto.dondeAlquila,datoDto.tieneTrabajo,datoDto.dondeTrabaja,datoDto.motivoConsulta,datoDto.recibioASocial,datoDto.barrioASocial,datoDto.cuandoASocial,datoDto.recibeASocial,datoDto.contraprestacion))

      if(dato)
      return dato;
    else
    throw new Error(`No se puedo agregar los datos`);
    }
    catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

public async updateDatoId(id: number, datoDto: Partial<CreateDatoDto>): Promise<Dato> {
  try {
    const criterio: FindOneOptions = { where: { id: id } };
    let dato: Dato = await this.datoRepository.findOne(criterio);
    
    if (dato) {
      // Actualizar solo los campos proporcionados en datoDto
      Object.assign(dato, datoDto);

      dato = await this.datoRepository.save(dato);
      return dato;
    } else {
      throw new Error(`No se pudo actualizar el id: ${id}`);
    }
  } catch (error) {
    throw new HttpException(
      { status: HttpStatus.NOT_FOUND, error: `500 - ERROR: ` + error },
      HttpStatus.NOT_FOUND
    );
  }
}


public async deleteDato(id : number) : Promise<boolean> {
  try {
     let criterio : FindOneOptions = { where: {id: id} };
     let dato : Dato = await this.datoRepository.findOne(criterio);
     if (!dato)
     throw new Error(`No se pudo actualizar eliminar`)
     else
        await this.datoRepository.delete(id);
     return true;
  } catch(error){
    throw new HttpException(
      {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
      HttpStatus.NOT_FOUND
    )
  }
}


  findAll() {
    return `This action returns all datos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dato`;
  }

  update(id: number, updateDatoDto: UpdateDatoDto) {
    return `This action updates a #${id} dato`;
  }

  remove(id: number) {
    return `This action removes a #${id} dato`;
  }
}


