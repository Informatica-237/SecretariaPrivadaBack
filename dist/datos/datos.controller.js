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
exports.DatosController = void 0;
const common_1 = require("@nestjs/common");
const datos_service_1 = require("./datos.service");
const create_dato_dto_1 = require("./dto/create-dato.dto");
let DatosController = class DatosController {
    constructor(datosService) {
        this.datosService = datosService;
    }
    addDato(dato) {
        return this.datosService.addDato(dato);
    }
    async getDatos() {
        return this.datosService.getAll();
    }
    async getId(id) {
        return this.datosService.getId(id);
    }
    updateDatoId(id, dato) {
        return this.datosService.updateDatoId(id, dato);
    }
    deleteDato(id) {
        return this.datosService.deleteDato(id);
    }
};
exports.DatosController = DatosController;
__decorate([
    (0, common_1.Post)('crear'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dato_dto_1.CreateDatoDto]),
    __metadata("design:returntype", Promise)
], DatosController.prototype, "addDato", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DatosController.prototype, "getDatos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DatosController.prototype, "getId", null);
__decorate([
    (0, common_1.Patch)('actualizar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_dato_dto_1.CreateDatoDto]),
    __metadata("design:returntype", Promise)
], DatosController.prototype, "updateDatoId", null);
__decorate([
    (0, common_1.Delete)('eliminar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DatosController.prototype, "deleteDato", null);
exports.DatosController = DatosController = __decorate([
    (0, common_1.Controller)('datos'),
    __metadata("design:paramtypes", [datos_service_1.DatosService])
], DatosController);
//# sourceMappingURL=datos.controller.js.map