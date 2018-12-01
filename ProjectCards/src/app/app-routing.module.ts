import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectCardsComponent } from './components/project-cards/project-cards.component';

const routes: Routes = [
  { path: '', component: ProjectCardsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
