import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule, ProgressbarModule, TooltipModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
FusionChartsModule.fcRoot(
  FusionCharts, 
  Charts,
  Widgets,
  FusionTheme
);
import { TagCloudModule } from 'angular-tag-cloud-module';

import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaporanComponent } from './laporan/laporan.component';
import { TiketComponent } from './tiket/tiket.component';
import { AuditComponent } from './audit/audit.component';

@NgModule({
  declarations: [DashboardComponent, LaporanComponent, TiketComponent, AuditComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(AdminRoutes),
    FusionChartsModule,
    TagCloudModule
  ]
})
export class AdminModule { }
