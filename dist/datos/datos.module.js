"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosModule = void 0;
const common_1 = require("@nestjs/common");
const datos_service_1 = require("./datos.service");
const datos_controller_1 = require("./datos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const dato_entity_1 = require("./entities/dato.entity");
let DatosModule = class DatosModule {
};
exports.DatosModule = DatosModule;
exports.DatosModule = DatosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dato_entity_1.Dato])],
        controllers: [datos_controller_1.DatosController],
        providers: [datos_service_1.DatosService],
    })
], DatosModule);
//# sourceMappingURL=datos.module.js.map