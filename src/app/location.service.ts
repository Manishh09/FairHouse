import { Injectable } from '@angular/core';
import { filter, Observable, of } from 'rxjs';
import { ILocation } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private houseList: ILocation[] =  [
    {
      name: 'Location one',
      id: 1,
      city: 'Hyderabad',
      description: 'safe place',
    },

    {
      name: 'Location two',
      id: 2,
      city: 'Mancherial',
      description: 'safe place',
    },
    {
      name: 'Location three',
      id: 3,
      city: 'Amsterdam',
      description: 'safe place',
    },
    {
      name: 'Location four',
      id: 4,
      city: 'Gachibowli',
      description: 'safe place',
    },
  ];
  constructor() { }

  getLocations(): Observable<ILocation[]>{
    return of(this.houseList);
  }
}
