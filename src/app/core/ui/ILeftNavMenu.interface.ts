import { ROLES_ENUM } from "src/app/constants/roles.enum";

export interface IleftNavMenu {
    //Creamos un atributo de la interfaz que es un array.
    links: {
        roles?: ROLES_ENUM[];
    }[];
}