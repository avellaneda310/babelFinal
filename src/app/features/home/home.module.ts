import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TeamComponent } from './pages/team/team.component';
import { HistoryComponent } from './pages/history/history.component';
import { WeComponent } from './pages/we/we.component';



@NgModule({
  declarations: [HomeComponent, TeamComponent, HistoryComponent, WeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[HomeComponent, TeamComponent, HistoryComponent, WeComponent]
})
export class HomeModule { }
