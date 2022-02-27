import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Group } from './groups';

@Injectable({
  providedIn: 'root'
})
export class SeeGroupsService {
  private groups = new BehaviorSubject<Group[]>([
    {
      id: 1,
      imgGroup: '1.jfif',
      GroupName: 'Danza',
      description: 'Auriculares',
      totalUsers: 50,
    },
    {
      id: 2,
      imgGroup: '2.jfif',
      GroupName: 'Video juegos',
      description: 'Auriculares',
      totalUsers: 50,
    },
    {
      id: 3,
      imgGroup: '3.jfif',
      GroupName: 'Musica',
      description: 'Auriculares',
      totalUsers: 50,
    },
    {
      id: 4,
      imgGroup: '4.jfif',
      GroupName: 'Lectura',
      description: 'Auriculares',
      totalUsers: 50,
    },
    {
      id: 5,
      imgGroup: '5.jfif',
      GroupName: 'Anime',
      description: 'Auriculares',
      totalUsers: 50,
    },
    {
      id: 6,
      imgGroup: '6.jfif',
      GroupName: 'Comics',
      description: 'Auriculares',
      totalUsers: 50,
    },
  ]);

  groups$ = this.groups.asObservable();

  constructor() { }

  getGroup(requestId : Number): Observable<Group | null> {
    return this.groups$.pipe(
      map(
        (groups) =>
        groups.find((group) => group.id === requestId) || null
      )
    )
  }
}
