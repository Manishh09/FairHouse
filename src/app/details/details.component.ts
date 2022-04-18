import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILocation } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  locationObj: ILocation | undefined;
  locationList: ILocation[] =[];


  constructor(private locationServ: LocationService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.locationServ.getLocations().subscribe({
        next: (resp: ILocation[] ) => {
          this.locationList = resp;
          this.locationObj = this.locationList.find(location => location.id === +params['id']);
        },
        error: () => alert(`there's an error in getlocation by dd api call`)
      })
    })
  }

}
