import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { RouterModule,  Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';

import {ToastModule} from 'primeng/toast';


const routes: Routes = [{
  path: '',
  component: GamesComponent
}]
@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    ToastModule,
  ],
  exports: [RouterModule]
})
export class AboutGameModule { }
