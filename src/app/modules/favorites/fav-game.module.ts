import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavGameComponent } from './fav-game/fav-game.component';
import { RatingModule } from 'primeng/rating';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FavgameRoutingModule } from './favgame-routing.module';



@NgModule({
  declarations: [FavGameComponent],
  imports: [
    CommonModule,
    RatingModule,
    FavgameRoutingModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
    CardModule,
    ToastModule



  ],
  exports: [FavGameComponent]
})
export class FavGameModule { }
