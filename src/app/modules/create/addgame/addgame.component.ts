import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Games } from 'src/app/core/models/games.models';
import { GamesService } from '../../service/games.service';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { AnimateService } from '../../animation/service/animate.service';
import { MatDialog } from '@angular/material/dialog'


@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.scss'],
  providers: [MessageService]
})
export class AddgameComponent implements OnInit {

  val3: number = 0  //gambiarra para dar nota
  edit: boolean = false;  //gambiarra para metodo Put
  id!: number   //gambiarra para metodo Put
  games: Games[] = [];


  game = this.fb.group({
    url: ['', [Validators.required, Validators.minLength(10)]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    descricao: ['', [Validators.required, Validators.minLength(5)]],
    plataforma: ['', [Validators.required, Validators.minLength(2)]],
    val3: [null, [Validators.required, Validators.minLength(1)]],
  });
  clearInput() {
    this.game = this.fb.group({
      url: '',
      name: '',
      descricao: '',
      plataforma: '',
      val3: null

    })
  }

  //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  constructor(private gamesService: GamesService, private matDialog: MatDialog, private fb: FormBuilder,

    private messageService: MessageService,
     private animate: AnimateService) {
    this.getGames();
  }

  ngOnInit(): void {

  }


  addGame(game: Games[]): void {
    this.gamesService
      .add(this.game.value)
      .subscribe((game) => this.games.push(game));
    this.clearInput()
    this.messageService.add({ severity: 'success', summary: 'Game adcionado!', detail: `Um novo game foi adcionado` });
  }


  removeGame(game: Games): void {
  
    this.games = this.games.filter((g) => game.name !== g.name);
    this.gamesService.remove(game.id).subscribe();
    console.log(`O  ${game.name}  foi deletado da lista de jogos`);
    this.messageService.add({ severity: 'error', summary: 'Excluido!', detail: 'O game foi exclu??do com sucesso' });
}

  getGames(): void {
    this.gamesService.getAll().subscribe((games) => {
      this.games = games
      console.log(games);
      setTimeout(() => {
        this.animate.requestEnded();
      }, 7000)
      this.animate.requestStarted();
    });

  }
  ///aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  onEdit(game: Games) {
    this.gamesService.updadteGame(game, this.id).subscribe((game) => (this.edit = false));
    this.clearInput()
    console.log(game);
    this.messageService.add({ severity: 'success', summary: 'Foi editado!', detail: 'Edi????o completa' });

  }

  startEdit(game: Games): void {
    this.game.patchValue(game);
    this.edit = true;
    console.log(game);
    this.id = game.id;
    this.messageService.add({
      severity: 'warn', summary: 'AVISO!!!', detail: 'Se deseja cancelar a edi????o' +
        ' n??o altere nada e aperte em "Adcionar"'
    });

  }

}