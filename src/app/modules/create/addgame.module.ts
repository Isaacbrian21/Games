import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddgameComponent } from './addgame/addgame.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MatDialogModule} from '@angular/material/dialog';
import { AddgameRoutingModule } from './addgame-routing.module';



@NgModule({
  declarations: [AddgameComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddgameRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RatingModule,
    ConfirmDialogModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    MatDialogModule

    
  ],
  exports: [RouterModule]
})
export class AddgameModule { }
