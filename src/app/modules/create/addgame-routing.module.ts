import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgameComponent } from "./addgame/addgame.component"

const routes: Routes = [

  {
    path: 'myApp/newgame',
    component: AddgameComponent
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AddgameRoutingModule { }