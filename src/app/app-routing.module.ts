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
import { AddStudentsToNewBatchComponent } from './add-students-to-new-batch/add-students-to-new-batch.component';
import { PracticalTestComponent } from './practical-test/practical-test.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { ShowQuestionsComponent } from './show-questions/show-questions.component';
import { TestCategoryComponent } from './test-category/test-category.component';

const routes: Routes = [
  {path:' ',component:LeadsComponent},
  {path:'getDetails', component: GetDetailsComponent},
  {path:'showDetails', component:ShowDetailsComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'courses', component:EditCourseComponent},
  {path:'programs', component:ProgramsComponent},
  {path:"batches", component:BatchesComponent},
  {path:"leads", component:LeadsComponent},
  {path: "addstudenttonewbatch", component:AddStudentsToNewBatchComponent},
  {path:"practicalTest",component:PracticalTestComponent,
    children:[
      {path:" ",component:AddQuestionsComponent},
      {path:"addQuestion",component:AddQuestionsComponent},
      {path:"showQuestionList",component:ShowQuestionsComponent},
      {path:"testCategory",component:TestCategoryComponent}
    ] 
  }
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)],

  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =
 [GetDetailsComponent,AddStudentsToNewBatchComponent, LeadsComponent, BatchesComponent, 
  ShowDetailsComponent, ProgramsComponent, AboutusComponent, 
  EditCourseComponent,PracticalTestComponent,TestCategoryComponent]
