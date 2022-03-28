import { Injectable } from '@angular/core';
import { Groups } from '../see-groups/groups';

@Injectable({
  providedIn: 'root'
})
export class YourGroupsService {
  readonly groups: Groups[] = [
    {
      idGrupos: 1,
      nombreGrupo: 'Maquillaje',
      descripcionGrupo: 'Auriculares',
      invitadosTotales: 50,
    },
  ];

  constructor() { }

  getGroup(requestId : Number): Groups | null {
    return this.groups.find((group) => group.idGrupos === requestId) || null;
  }
}
