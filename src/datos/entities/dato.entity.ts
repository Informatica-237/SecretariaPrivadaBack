import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Dato {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: "Sin completar" })
    nombre?: string

    @Column({ default: "Sin completar" })
    apellido?: string

    @Column()
    dni?: string

    @Column({ default: "Sin completar" })
    direccion?: string

    @Column({ default: "Sin completar" })
    cargo?: string

    @Column()
    telefonos?: string

    @Column({ type: "longtext", nullable: true })
    acciones?: string

    @Column({ default: false })
    auditar?: boolean

    @Column()
    nSolicitud?: string

    @Column()
    fecha?: Date;

    @Column({ type: "longtext", nullable: true })
    temaAudiencia?: string

    @Column({ default: false })
    terreno?: boolean

    @Column({ default: false })
    anotado?: boolean

    @Column()
    año?: string

    @Column({ default: false })
    tieneCasa?: boolean

    @Column({ default: "No Alquila" })
    dondeAlquila?: string

    @Column({ default: false })
    tienetrabajo?: boolean

    @Column({ default: "Sin completar" })
    dondeTrabaja?: string

    @Column({ type: "longtext", nullable: true })
    motivoConsulta?: string

    @Column({ default: false })
    recibioASocial?: boolean

    @Column({ default: "Sin completar" })
    barrioASocial?: string

    @Column()
    cuandoASocial?: Date

    @Column({ default: false })
    recibeASocial?: boolean

    @Column({ type: "longtext", nullable: true })
    contraprestacion?: string



    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;

    constructor(nombre: string, apellido: string, dni: string, direccion: string, cargo: string, telefonos: string, acciones: string, auditar: boolean, nSolicitud: string,
        fecha: Date,
        temaAudiencia: string,
        terreno: boolean,
        anotado: boolean,
        año: string,
        tieneCasa: boolean,
        dondeAlquila: string,
        tieneTrabajo: boolean,
        dondeTrabaja: string,
        motivoConsulta: string,
        recibioASocial: boolean,
        barrioASocial: string,
        cuandoASocial: Date,
        recibeASocial: boolean,
        contraprestacion: string,
    ) {
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
    public getIdDato(): number {
        return this.id;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
    public setApellido(apellido: string) {
        this.apellido = apellido;
    }
    public setDni(dni: string) {
        this.dni = dni;
    }
    public setAcciones(acciones: string) {
        this.acciones = acciones;
    }
    public setdireccion(direccion: string) {
        this.direccion = direccion;
    }
    public setCargo(cargo: string) {
        this.cargo = cargo;
    }
    public setTelefonos(telefonos: string) {
        this.telefonos = telefonos;
    }
    public setAuditar(auditar: boolean) {
        this.auditar = auditar;
    }
}
