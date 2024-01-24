import { DatosService } from './datos.service';
import { CreateDatoDto } from './dto/create-dato.dto';
import { Dato } from './entities/dato.entity';
export declare class DatosController {
    private readonly datosService;
    constructor(datosService: DatosService);
    addDato(dato: CreateDatoDto): Promise<Dato>;
    getDatos(): Promise<Dato[]>;
    getId(id: number): Promise<Dato>;
    updateDatoId(id: number, dato: CreateDatoDto): Promise<Dato>;
    deleteDato(id: number): Promise<boolean>;
}
