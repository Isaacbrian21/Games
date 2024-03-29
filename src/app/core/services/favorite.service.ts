import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorito } from 'src/app/core/models/fav.models';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  /* private favUrl = '  http://localhost:3000/favoritos' */
  private favUrl = 'https://games-database-iota.vercel.app/favoritos'
  constructor(private http: HttpClient) { }


  getFav(): Observable<Favorito[]>{
    return this.http.get<Favorito[]>(this.favUrl)
  }

  addFav(favorito: Favorito): Observable<Favorito>{
    return this.http.post<Favorito>(`${this.favUrl}`, favorito)
  }

  removeFav(id: number): Observable<void>{
    return this.http.delete<void>(`${this.favUrl}/${id}`)
  }
  changeRating(favorito: Favorito, id: Number){
    return this.http.put<Favorito>(`${this.favUrl}/${id}`, favorito)
  }
}
