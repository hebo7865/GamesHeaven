import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { IGames } from './../interfaces/igames';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private readonly _HttpClient : HttpClient) {}

  games:WritableSignal<IGames[]> = signal([{} as IGames])

  apiKey:string = '67011d8578msh68777bc1c9f9d15p155808jsn077171baf4f7'

  getCategory(cat:string | null):Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
      {
        headers: {
        'x-rapidapi-key': this.apiKey,
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }}
    )
  }

}
