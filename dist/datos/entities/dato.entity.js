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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dato = void 0;
const typeorm_1 = require("typeorm");
let Dato = class Dato {
    constructor(nombre, apellido, dni, direccion, cargo, telefonos, acciones, auditar, nSolicitud, fecha, temaAudiencia, terreno, anotado, año, tieneCasa, dondeAlquila, tieneTrabajo, dondeTrabaja, motivoConsulta, recibioASocial, barrioASocial, cuandoASocial, recibeASocial, contraprestacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.direccion = direccion;
        this.cargo = cargo;
        this.telefonos = telefonos;
        this.acciones = acciones;
        this.auditar = auditar;
        this.nSolicitud = nSolicitud;
        this.fecha = fecha;
        this.temaAudiencia = temaAudiencia;
        this.terreno = terreno;
        this.anotado = anotado;
        this.año = año;
        this.tieneCasa = tieneCasa;
        this.dondeAlquila = dondeAlquila;
        this.tienetrabajo = tieneTrabajo;
        this.dondeTrabaja = dondeTrabaja;
        this.motivoConsulta = motivoConsulta;
        this.recibioASocial = recibioASocial;
        this.barrioASocial = barrioASocial;
        this.cuandoASocial = cuandoASocial;
        this.recibeASocial = recibeASocial;
        this.contraprestacion = contraprestacion;
    }
    getIdDato() {
        return this.id;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    setDni(dni) {
        this.dni = dni;
    }
    setAcciones(acciones) {
        this.acciones = acciones;
    }
    setdireccion(direccion) {
        this.direccion = direccion;
    }
    setCargo(cargo) {
        this.cargo = cargo;
    }
    setTelefonos(telefonos) {
        this.telefonos = telefonos;
    }
    setAuditar(auditar) {
        this.auditar = auditar;
    }
};
exports.Dato = Dato;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Dato.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "Sin completar" }),
    __metadata("design:type", String)
], Dato.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "Sin completar" }),
    __metadata("design:type", String)
], Dato.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dato.prototype, "dni", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "Sin completar" }),
    __metadata("design:type", String)
], Dato.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "Sin completar" }),
    __metadata("design:type", String)
], Dato.prototype, "cargo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dato.prototype, "telefonos", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "longtext", nullable: true }),
    __metadata("design:type", String)
], Dato.prototype, "acciones", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Dato.prototype, "auditar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dato.prototype, "nSolicitud", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Dato.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "longtext", nullable: true }),
    __metadata("design:type", String)
], Dato.prototype, "temaAudiencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Dato.prototype, "terreno", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Dato.prototype, "anotado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dato.prototype, "a\u00F1o", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Dato.prototype, "tieneCasa", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "No Alquila" }),
    __metadata("design:type", String)
], Dato.prototype, "dondeAlquila", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Dato.prototype, "tienetrabajo", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "Sin completar" }),
    __metadata("design:type", String)
], Dato.prototype, "dondeTrabaja", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "longtext", nullable: true }),
    __metadata("design:type", String)
], Dato.prototype, "motivoConsulta", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Dato.prototype, "recibioASocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "Sin completar" }),
    __metadata("design:type", String)
], Dato.prototype, "barrioASocial", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Dato.prototype, "cuandoASocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Dato.prototype, "recibeASocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "longtext", nullable: true }),
    __metadata("design:type", String)
], Dato.prototype, "contraprestacion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], Dato.prototype, "createdAt", void 0);
exports.Dato = Dato = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, Boolean, String, Date, String, Boolean, Boolean, String, Boolean, String, Boolean, String, String, Boolean, String, Date, Boolean, String])
], Dato);
//# sourceMappingURL=dato.entity.js.map