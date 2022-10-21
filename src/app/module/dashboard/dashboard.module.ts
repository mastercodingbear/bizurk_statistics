import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AudienceReachComponent } from './components/audience-reach/audience-reach.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DeviceReachComponent } from './components/device-reach/device-reach.component';
import { GenderReachComponent } from './components/gender-reach/gender-reach.component';
import { GeoReachComponent } from './components/geo-reach/geo-reach.component';
import { LayoutModule } from 'app/layout/layout.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    DashboardComponent,
    AudienceReachComponent,
    DashboardHeaderComponent,
    DeviceReachComponent,
    GenderReachComponent,
    GeoReachComponent,
  ],
  imports: [CommonModule, LayoutModule, NgApexchartsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
