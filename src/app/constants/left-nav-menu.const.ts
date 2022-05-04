import { RESOURCE_BY_ROLES } from "../core/routes/internal.routes";
import { IleftNavMenu } from "../core/ui/ILeftNavMenu.interface";
import { ROLES_ENUM } from "./roles.enum";

export const LEFT_NAV_MENUS: IleftNavMenu[] = [
    {
        links:[
            {
                roles: RESOURCE_BY_ROLES.PANEL_ADMIN
            }
        ]
    }
]