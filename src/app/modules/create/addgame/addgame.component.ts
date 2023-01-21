import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Games } from 'src/app/core/models/games.models';
import { GamesService } from '../../service/games.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.scss'],
  providers: [MessageService]
})
export class AddgameComponent implements OnInit {
  games!: Games[]
  form!: FormGroup;
  submitted = false
  constructor(private gamesService: GamesService,
    private fb: FormBuilder,
    private messageService: MessageService) {

  }

  ngOnInit(): void {



    this.form = this.fb.group({
      id: [''],
      url: ['', [Validators.required, Validators.minLength(10)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(5)]],
      plataforma: ['', [Validators.required, Validators.minLength(2)]],
      val3: [null, [Validators.required, Validators.minLength(1)]],
    })
  }

  updateGame(games: Games){
    this.form.patchValue({
      id: games.id,
      url: games.url,
      name: games.name,
      descricao: games.descricao,
      plataforma: games.plataforma,
      val3: games.val3
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);

    if (this.form.valid) {
      console.log("submit");
      this.gamesService.add(this.form.value).subscribe()
      this.form.reset();
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();

  }



  removeGame(game: Games): void {
    this.games = this.games.filter((g) => game.name !== g.name);
    this.gamesService.remove(game.id).subscribe();
    console.log(`O  ${game.name}  foi deletado da lista de jogos`);
    this.messageService.add({severity:'error', summary: 'Excluido!', detail: 'O game foi excluído com sucesso'});
  }

  
}