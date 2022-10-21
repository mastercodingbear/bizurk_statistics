import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardComponent } from './components/card/card.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { CountryReachProgressComponent } from './components/country-reach-progress/country-reach-progress.component';

@NgModule({
  declarations: [
    NavigationComponent,
    CardComponent,
    ThemeToggleComponent,
    CountryReachProgressComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavigationComponent,
    CardComponent,
    ThemeToggleComponent,
    CountryReachProgressComponent,
  ],
})
export class LayoutModule {}
