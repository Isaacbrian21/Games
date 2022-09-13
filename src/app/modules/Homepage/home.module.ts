import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CaptchaModule} from 'primeng/captcha';
import {DialogModule} from 'primeng/dialog';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}]
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DialogModule
  ],
  exports: [RouterModule]
})
export class HomepModule { }
