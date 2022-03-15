import { Injectable } from '@angular/core';
import { Group } from './groups';

@Injectable({
  providedIn: 'root'
})
export class SeeGroupsService {
  readonly groups: Group[] = ([
    {
      id: 1,
      imgGroup: '1.jfif',
      GroupName: 'Danza',
      description: 'Aquí solo bailamos Regueton :v',
      totalUsers: 50,
    },
    {
      id: 2,
      imgGroup: '2.jfif',
      GroupName: 'Video juegos',
      description: 'Este grupo si es de a deberas, hablaremos cosas variadas, obviamente en el ambito de los video juegos estupida, asi que sigue nuestro grupo si eres GOOD B)',
      totalUsers: 50,
    },
    {
      id: 3,
      imgGroup: '3.jfif',
      GroupName: 'Musica',
      description: 'Les mentimos, este grupo es solo para hablar de la Diosa de Lady Gaga, ella literalmente creo el mundo, una vez ella falto dos dias al colegio, esos dias se le conocen actualmente como sabado y domingo',
      totalUsers: 50,
    },
    {
      id: 4,
      imgGroup: '4.jfif',
      GroupName: 'Lectura',
      description: 'Un grupo para hablar maravillas de lo que fue H.P. Lovecraft, sin olvidar a nuestro queridisimo Stefen King.',
      totalUsers: 50,
    },
    {
      id: 5,
      imgGroup: '5.jfif',
      GroupName: 'Anime',
      description: 'Este grupo es solo una excusa para adorar a nuestro querido DeadNote, siendo este el mejor anime que se haya realizado en la historia.',
      totalUsers: 50,
    },
    {
      id: 6,
      imgGroup: '6.jfif',
      GroupName: 'Comics',
      description: 'Un fucking grupo dode solo se tratarán exclusivamente de comics, se tratarán principalmente de marvel o DC, pero todos sabemos que el mejor comic de todos es The Walking Dead, asi esza',
      totalUsers: 50,
    },
  ]);

  constructor() { }

  getGroup(requestId : Number): Group | null {
    return this.groups.find((group) => group.id === requestId) || null
  }
}
