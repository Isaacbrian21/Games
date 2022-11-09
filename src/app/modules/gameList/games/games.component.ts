import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import {FormControl,FormGroup,Validators,} from '@angular/forms';
import { Games } from 'src/app/core/models/games.models';
import { GamesService } from '../../service/games.service';
import { Favorito } from 'src/app/core/models/fav.models';
import { FavoriteService } from '../../services/favorite.service';
import {MessageService} from 'primeng/api';
import { AnimateService } from '../../animation/service/animate.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  providers: [MessageService]
})
export class GamesComponent implements OnInit {
  val3: number = 0;
  @Input() games!: Games[];
  favoritos: Favorito[] = [];
  
  

  game = new FormGroup({
    url: new FormControl('', [Validators.required, Validators.minLength(10)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descricao: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    plataforma: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    val3: new FormControl([Validators.required, Validators.minLength(1)]),
  });

  constructor(
    private gamesService: GamesService,
    private favService: FavoriteService,
    private messageService: MessageService,
    private animate: AnimateService
  ) {
    this.getGames();
  }

  ngOnInit(): void {}

  getGames(): void {
    this.gamesService.getAll().subscribe((games) => {
      this.games = games;
      console.log(games);
      setTimeout(() =>{
        this.animate.requestEnded();
      }, 7000)
      this.animate.requestStarted();
    });
  }

  addFavorito(favoritos: Favorito): void {
    this.favService.addFav(favoritos).subscribe({
      next: c => {
        this.messageService.add({severity:'success', summary: 'Favoritado!', detail: 'O game adcionado aos favoritos', icon: 'pi-file'});
      },
      error: err => this.messageService.add({severity:'error', summary: 'Ihhh, deu ruim!', detail: 'O já foi adcionado aos favoritos antes', icon: 'pi-file'})
    });
    console.log(favoritos);
    
  }

  
}
/* 
addFavorito(favoritos: Favorito): void {
  this.favService.addFav(favoritos).subscribe((fav) => this.favoritos.push(fav));
  console.log(favoritos);
  this.messageService.add({severity:'success', summary: 'Favoritado!', detail: 'O game adcionado aos favoritos', icon: 'pi-file'});
  
 */