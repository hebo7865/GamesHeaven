import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private readonly _HttpClient : HttpClient) { }

  apiKey:string = '67011d8578msh68777bc1c9f9d15p155808jsn077171baf4f7'

  getAllGames():Observable<any>{
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',
      {
        headers:
        {
          'x-rapidapi-key': this.apiKey,
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
  
        }
      }
    )
  }
}
