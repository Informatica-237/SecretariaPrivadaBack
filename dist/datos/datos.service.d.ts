import { CreateDatoDto } from './dto/create-dato.dto';
import { UpdateDatoDto } from './dto/update-dato.dto';
import { Dato } from './entities/dato.entity';
import { Repository } from 'typeorm';
export declare class DatosService {
    private datoRepository;
    constructor(datoRepository: Repository<Dato>);
    getAll(): Promise<Dato[]>;
    getId(id: number): Promise<Dato>;
    addDato(datoDto: CreateDatoDto): Promise<Dato>;
    updateDatoId(id: number, datoDto: Partial<CreateDatoDto>): Promise<Dato>;
    deleteDato(id: number): Promise<boolean>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDatoDto: UpdateDatoDto): string;
    remove(id: number): string;
}
