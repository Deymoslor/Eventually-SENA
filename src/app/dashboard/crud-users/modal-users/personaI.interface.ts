import { ROLES_ENUM } from "src/app/constants/roles.enum";

export interface PersonaI{
    idPersona: number;
    token: any;
    nombre: string;
    apellidos: string;
    documento: string;
    fechaNacimiento: string;
    Email: string;
    password: string;
    ciudad: string;
    celular: string;
    estado: string;
    Roles_idRoles: ROLES_ENUM;
}