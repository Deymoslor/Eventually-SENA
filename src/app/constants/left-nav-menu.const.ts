import { IleftNavMenu } from "../core/ui/ILeftNavMenu.interface";
import { ROLES_ENUM } from "./roles.enum";

export const LEFT_NAV_MENUS: IleftNavMenu[] = [
    {
        links:[
            {
                roles: [ROLES_ENUM.ADMIN, ROLES_ENUM.INVITADO]
            }
        ]
    }
]