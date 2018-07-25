import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ProgramsComponent } from './programs/programs.component';
import { BatchesComponent } from './batches/batches.component';
import { LeadsComponent } from './leads/leads.component';
import { SearchStudentPipe } from './search-student.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AddStudentsToNewBatchComponent } from './add-students-to-new-batch/add-students-to-new-batch.component';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { PracticalTestComponent } from './practical-test/practical-test.component';


@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
    HeaderComponent,
    AboutusComponent,
    EditCourseComponent,
    ProgramsComponent,
    BatchesComponent,
    LeadsComponent,
    SearchStudentPipe,
    SideNavComponent,
    FooterComponent,
    AddStudentsToNewBatchComponent,
    ShowStudentsComponent,
    PracticalTestComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
