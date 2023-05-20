import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Games } from 'src/app/core/models/games.models';
import { Location } from '@angular/common';
import { GamesService } from 'src/app/core/service/games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

game!: Games;
image!: string

constructor(
    private  route: ActivatedRoute,
    private gamesService: GamesService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getGame();
  }


  getGame():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gamesService.getById(id).subscribe(game => this.game = game)
  }

 back(): void{
  this.location.back();
 }
}
