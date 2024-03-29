import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Games } from 'src/app/core/models/games.models';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
/*   private apiUrl = 'http://localhost:3000/games'; */
  private apiUrl = 'https://games-database-iota.vercel.app/games';


  constructor(private http: HttpClient) {}

  public getAll(): Observable<Games[]> {
    return this.http.get<Games[]>(this.apiUrl);
  }

  public getById(id: number): Observable<Games>{
    return this.http.get<Games>(`${this.apiUrl}/${id}`)
  }
  public add(game: Games): Observable<Games> {
    return this.http.post<Games>(this.apiUrl, game);
  }

  public remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  public updadteGame(game: Games, id: number): Observable<Games> {
    return this.http.put<Games>(`${this.apiUrl}/${id}`, game);
  }

}
