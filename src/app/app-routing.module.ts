import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '',
   loadChildren: () => import('../app/modules/Homepage/home.module').then(home => home.HomepModule)},

  {path: '', loadChildren: () => import('./modules/create/addgame.module').then(newg => newg.AddgameModule)},

  {path: '', loadChildren: () => import('./modules/gameList/about-game.module').then(games => games.AboutGameModule)},

  {path: '', loadChildren: () => import('./modules/favorites/fav-game.module').then(favGames => favGames.FavGameModule)},

  {path: '', redirectTo: '/home', pathMatch: 'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
