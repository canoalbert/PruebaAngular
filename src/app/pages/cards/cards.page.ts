import { Component, OnInit } from '@angular/core';
import {Characters} from "../../common/interfaces";
import {RickMortyService} from "../../services/rick-morty.service";


@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  characters: Characters[] = []
  constructor(private service: RickMortyService) { }

  ngOnInit() {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.service.getCharacters().subscribe(
      {
        next: value => {
          this.characters = value.results;
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
