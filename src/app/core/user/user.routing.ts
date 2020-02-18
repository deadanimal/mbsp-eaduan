import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AduanComponent } from './aduan/aduan.component';
import { ProfilComponent } from './profil/profil.component';

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'aduan',
                component: AduanComponent
            },
            {
                path: 'profil',
                component: ProfilComponent
            }
        ]
    }
]