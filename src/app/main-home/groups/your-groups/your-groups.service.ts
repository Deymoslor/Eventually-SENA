import { Injectable } from '@angular/core';
import { Group } from '../see-groups/groups';

@Injectable({
  providedIn: 'root'
})
export class YourGroupsService {
  readonly groups: Group[] = [
    {
      id: 1,
      imgGroup: '3.jfif',
      GroupName: 'Maquillaje',
      description: 'Auriculares',
      totalUsers: 50,
    },
  ];

  constructor() { }

  getGroup(requestId : Number): Group | null {
    return this.groups.find((group) => group.id === requestId) || null;
  }
}
