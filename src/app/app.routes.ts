import { Routes } from '@angular/router';
import { PageMusicComponent } from './page-music/page-music.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: "music", component: PageMusicComponent
    },
    {
        path: "login", component: LoginComponent
    }
];
