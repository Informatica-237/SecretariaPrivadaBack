"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosService = void 0;
const common_1 = require("@nestjs/common");
const dato_entity_1 = require("./entities/dato.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let DatosService = class DatosService {
    constructor(datoRepository) {
        this.datoRepository = datoRepository;
    }
    async getAll() {
        return await this.datoRepository.find();
    }
    async getId(id) {
        try {
            const criterio = { where: { id: id } };
            let dato = await this.datoRepository.findOne(criterio);
            if (dato)
                return dato;
            else
                throw new Error(`No se encontro ciudad con id: ${id}`);
        }
        catch (error) {
            throw new common_1.HttpException({ status: common_1.HttpStatus.NOT_FOUND, error: `500 - ERROR: ` + error }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async addDato(datoDto) {
        try {
            let dato = await this.datoRepository.save(new dato_entity_1.Dato(datoDto.nombre, datoDto.apellido, datoDto.dni, datoDto.direccion, datoDto.cargo, datoDto.telefonos, datoDto.acciones, datoDto.auditar, datoDto.nSolicitud, datoDto.fecha, datoDto.temaAudiencia, datoDto.terreno, datoDto.anotado, datoDto.año, datoDto.tieneCasa, datoDto.dondeAlquila, datoDto.tieneTrabajo, datoDto.dondeTrabaja, datoDto.motivoConsulta, datoDto.recibioASocial, datoDto.barrioASocial, datoDto.cuandoASocial, datoDto.recibeASocial, datoDto.contraprestacion));
            if (dato)
                return dato;
            else
                throw new Error(`No se puedo agregar los datos`);
        }
        catch (error) {
            throw new common_1.HttpException({ status: common_1.HttpStatus.NOT_FOUND, error: `500 - ERROR: ` + error }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async updateDatoId(id, datoDto) {
        try {
            const criterio = { where: { id: id } };
            let dato = await this.datoRepository.findOne(criterio);
            if (dato) {
                Object.assign(dato, datoDto);
                dato = await this.datoRepository.save(dato);
                return dato;
            }
            else {
                throw new Error(`No se pudo actualizar el id: ${id}`);
            }
        }
        catch (error) {
            throw new common_1.HttpException({ status: common_1.HttpStatus.NOT_FOUND, error: `500 - ERROR: ` + error }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async deleteDato(id) {
        try {
            let criterio = { where: { id: id } };
            let dato = await this.datoRepository.findOne(criterio);
            if (!dato)
                throw new Error(`No se pudo actualizar eliminar`);
            else
                await this.datoRepository.delete(id);
            return true;
        }
        catch (error) {
            throw new common_1.HttpException({ status: common_1.HttpStatus.NOT_FOUND, error: `500 - ERROR: ` + error }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    findAll() {
        return `This action returns all datos`;
    }
    findOne(id) {
        return `This action returns a #${id} dato`;
    }
    update(id, updateDatoDto) {
        return `This action updates a #${id} dato`;
    }
    remove(id) {
        return `This action removes a #${id} dato`;
    }
};
exports.DatosService = DatosService;
exports.DatosService = DatosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(dato_entity_1.Dato)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DatosService);
//# sourceMappingURL=datos.service.js.map