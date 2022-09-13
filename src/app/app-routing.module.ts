import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', loadChildren: () => import('../app/modules/Homepage/home.module').then(home => home.HomepModule)},
  
  {path: 'newg', loadChildren: () => import('./modules/create/addgame.module').then(newg => newg.AddgameModule)},

  {path: 'games', loadChildren: () => import('./modules/gameList/about-game.module').then(games => games.AboutGameModule)},

  {path: 'favGames', loadChildren: () => import('./modules/favorites/fav-game.module').then(favGames => favGames.FavGameModule)},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
