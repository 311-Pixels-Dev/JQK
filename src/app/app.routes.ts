import { Routes } from '@angular/router';
import { PageMusicComponent } from './page-music/page-music.component';
import { LoginComponent } from './login/login.component';
import { PlaylistUserComponent } from './playlist-user/playlist-user.component';

export const routes: Routes = [
    {
        path: "homemusic", component: PageMusicComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "playlists", component: PlaylistUserComponent
    }
];
