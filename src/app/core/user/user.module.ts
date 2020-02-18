import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BsDropdownModule, ProgressbarModule, TooltipModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { AduanComponent } from './aduan/aduan.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [DashboardComponent, AduanComponent, ProfilComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(UserRoutes)
    
  ]
})
export class UserModule { }
