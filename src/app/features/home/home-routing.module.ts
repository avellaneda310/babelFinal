import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HistoryComponent } from './pages/history/history.component';
import { TeamComponent } from './pages/team/team.component';
import { WeComponent } from './pages/we/we.component';


const routes: Routes = [
  {path: '', 
  children:[
    {path: '', component: HomeComponent},
    {
      path: 'history', component: HistoryComponent
    },
    {
      path: 'team', component: TeamComponent
    },
    {
      path: 'we', component: WeComponent
    }
  ]}

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
