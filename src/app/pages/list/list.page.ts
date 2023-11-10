import { Component, OnInit } from '@angular/core';
import {LocationFull} from "../../common/interfaces";
import {RickMortyService} from "../../services/rick-morty.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {locations: LocationFull[] = []
  constructor(private service: RickMortyService) { }

  ngOnInit() {
    this.loadLocations();
  }

  private loadLocations() {
    this.service.getLocations().subscribe(
      {
        next: value => {
          this.locations = value.results;
        },
        error: err => {
          console.error(err);
        },
        complete: () =>{
          console.log('Done')
        }
      }
    )
  }
}
