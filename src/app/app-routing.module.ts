import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationCallbackComponent } from './components/authentication-callback/authenticationCallback.component';
import { SpotifyPlaylistsComponent } from './components/spotify-playlists/spotify-playlists.component';

export const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'callback', component: AuthenticationCallbackComponent },
  { path: 'playlists', component: SpotifyPlaylistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
