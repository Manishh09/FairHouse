import { Component, OnInit } from '@angular/core';
import { ILocation } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  seachedCity = '';
  searchResultList: ILocation[] = []
  houseList: ILocation[] = [];

  constructor(private locationServ: LocationService) {}

  ngOnInit(): void {}
  onSearchHouse() {
    if(this.seachedCity !== '') {
      const temp = this.locationServ.getLocations().subscribe({
        next: (resp: ILocation[]) =>{
          this.houseList = resp;
          this.searchResultList = this.houseList.filter( city => city.city.toLocaleLowerCase() === this.seachedCity.toLocaleLowerCase());
        },
        error: () => alert('There is an error in get locations api call')
      });

    }
  }
}
