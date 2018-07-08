import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { GetDetailsComponent } from './get-details/get-details.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
  import {EditCourseComponent} from './edit-course/edit-course.component';
import { ProgramsComponent } from './programs/programs.component';
import { BatchesComponent } from './batches/batches.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  {path:'getDetails', component: GetDetailsComponent},
  {path:'showDetails', component:ShowDetailsComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'courses', component:EditCourseComponent},
  {path:'programs', component:ProgramsComponent},
  {path:"batches", component:BatchesComponent},
  {path:"leads", component:LeadsComponent}
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)],

  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GetDetailsComponent, LeadsComponent, BatchesComponent, ShowDetailsComponent, ProgramsComponent, AboutusComponent, EditCourseComponent]
