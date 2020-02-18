import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaporanComponent } from './laporan/laporan.component';
import { TiketComponent } from './tiket/tiket.component';
import { AuditComponent } from './audit/audit.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'laporan',
                component: LaporanComponent
            },
            {
                path: 'tiket',
                component: TiketComponent
            },
            {
                path: 'audit',
                component: AuditComponent
            }
        ]
    }
]