

import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Games } from 'src/app/core/models/games.models';

import { Favorito } from 'src/app/core/models/fav.models';

import { MessageService } from 'primeng/api';
import { GamesService } from 'src/app/core/service/games.service';
import { FavoriteService } from 'src/app/core/services/favorite.service';
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
  game!: Games
  gameId!: number
  dialog!: boolean
  form!: FormGroup
  gamesLength!: number;
  gameList!: Games;


  constructor(
    private gamesService: GamesService,
    private favService: FavoriteService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private animate: AnimateService
  ) {
    this.getGames();
  }

  ngOnInit(): void { }

  

  get formControls() {
    return this.form.controls;
  }
  get gameGroup() {
    return this.form.controls;
  }


  getGames(): void {
    this.gamesService.getAll().subscribe((games) => {
      this.games = games;
      this.gamesLength = games.length
      /* setTimeout(() => {
        this.animate.requestEnded();
      }, 7000)
      this.animate.requestStarted(); */
    });
  }

  addFavorito(favoritos: Favorito): void {
    this.favService.addFav(favoritos).subscribe({
      next: c => {
        this.messageService.add({ severity: 'success', summary: 'Favoritado!', detail: 'O game adcionado aos favoritos', icon: 'pi-file' });
      },
      error: err => this.messageService.add({ severity: 'error', summary: 'Ihhh, deu ruim!', detail: 'O já foi adcionado aos favoritos antes', icon: 'pi-file' })
    });
    console.log(favoritos);

  }
  onEdit(game: Games) {
    this.game = { ...game };
    this.gameId = game.id;
    this.dialog = true
    this.form = this.fb.group({
      url: [game.url, [Validators.required, Validators.minLength(10)]],
      name: [game.name, [Validators.required, Validators.minLength(3)]],
      descricao: [game.descricao, [Validators.required, Validators.minLength(5)]],
      plataforma: [game.plataforma, [Validators.required, Validators.minLength(2)]],
      val3: [game.val3, [Validators.required, Validators.minLength(1)]],
    })
  }
  closeDialog() {
    this.dialog = false;
  }

  updateGame() {
    this.game = this.form.value;
    this.game.id = this.gameId;
    this.gamesService.updadteGame(this.game, this.game.id).subscribe(g => this.games[this.games.findIndex(before => before.id === this.game.id)] = g)
    this.dialog = false;
    this.messageService.add({ severity: 'success', summary: 'Deu Boooom', detail: 'Game atualizado, menor', life: 2000 })
  }
}
