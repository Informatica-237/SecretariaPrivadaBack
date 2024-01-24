export class CreateDatoDto {
    nombre?:string;
    apellido?:string;
    dni?:string;
    direccion?:string;
    cargo?:string;
    telefonos?:string;
    acciones?:string;
    auditar?:boolean;
    //Ficha audiencia
    nSolicitud?:string;
    fecha?:Date;
    temaAudiencia?:string;
    terreno?:boolean;
    anotado?:boolean;
    año?:string;
    tieneCasa?:boolean;
    dondeAlquila?:string;
    tieneTrabajo?:boolean;
    dondeTrabaja?:string;
    motivoConsulta?:string;
    recibioASocial?:boolean;
    barrioASocial?:string;
    cuandoASocial?:Date;
    recibeASocial?:boolean;
    contraprestacion?:string;
}
