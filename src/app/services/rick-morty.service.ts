import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InfoApiCharacters, InfoApiLocations} from "../common/interfaces";

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  URL_BASE = "https://rickandmortyapi.com/api"
  constructor(private http: HttpClient) { }
  getCharacters(): Observable<InfoApiCharacters>{
    return this.http.get<InfoApiCharacters>(this.URL_BASE + 'characters');
  }

  getLocations(): Observable<InfoApiLocations>{
    return this.http.get<InfoApiLocations>(this.URL_BASE + 'locations');
  }
}
