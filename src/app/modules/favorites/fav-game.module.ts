import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavGameComponent } from './fav-game/fav-game.component';
import {RatingModule} from 'primeng/rating';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { CardModule, } from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';



const routes: Routes = [{
  path: '',
  component: FavGameComponent
}]
@NgModule({
  declarations: [FavGameComponent],
  imports: [
    CommonModule,
    RatingModule,
    RouterModule.forChild(routes),
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
    CardModule,
    ToastModule
    
    
    
  ],
  exports: [RouterModule]
})
export class FavGameModule { }
