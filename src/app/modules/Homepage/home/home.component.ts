import { Component, OnInit } from '@angular/core';
import { Favorito } from 'src/app/core/models/fav.models';
import { FavoriteService } from 'src/app/core/services/favorite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private favoriteService: FavoriteService) {
    this.getFavs()
  }

  favoritos: Favorito[] = []
  ngOnInit(): void {
  }


  getFavs(): void {
    this.favoriteService.getFav().subscribe((fav) => {
      this.favoritos = fav;


    })
  }

}
