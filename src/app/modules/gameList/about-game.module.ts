import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { RouterModule,  Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';

import {ToastModule} from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { GamesRoutingModule } from './games-routing.module';
import { GameDetailsComponent } from './game-details/game-details.component';
import {InputTextareaModule} from 'primeng/inputtextarea';


@NgModule({
  declarations: [GamesComponent, GameDetailsComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    InputTextareaModule
  ],
  exports: [RouterModule]
})
export class AboutGameModule { }
