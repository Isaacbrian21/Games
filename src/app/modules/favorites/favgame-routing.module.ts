import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavGameComponent } from './fav-game/fav-game.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'favGames',
    pathMatch: 'full'
  },
  {
    path: 'favGames',
    component: FavGameComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavgameRoutingModule { }