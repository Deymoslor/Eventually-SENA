import { Injectable } from '@angular/core';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class SettingsReportService {
  readonly events: Event[] = ([
    {
      id: 1,
      fecha: '16/5/2020',
      description: 'Este es un ejemplo de un evento realizado',
      grupo: 'danza',
      totalUsers: 24,
    },
    {
      id: 2,
      fecha: '23/5/2020',
      description: 'Este es un ejemplo de un evento realizado',
      grupo: 'Musica',
      totalUsers: 29,
    },
    {
      id: 3,
      fecha: '3/6/2020',
      description: 'Este es un ejemplo de un evento realizado',
      grupo: 'Danza',
      totalUsers: 36,
    },
    {
      id: 4,
      fecha: '11/6/2020',
      description: 'Este es un ejemplo de un evento realizado',
      grupo: 'Danza',
      totalUsers: 21,
    },
    {
      id: 5,
      fecha: '17/6/2020',
      description: 'Este es un ejemplo de un evento realizado',
      grupo: 'Danza',
      totalUsers: 16,
    },
    {
      id: 6,
      fecha: '15/7/2020',
      description: 'Este es un ejemplo de un evento realizado',
      grupo: 'Musica',
      totalUsers: 67,
    },
  ]);
  constructor() { }

  getReport(requestId : Number): Event | null {
    return this.events.find((events) => events.id === requestId) || null
  }
}
