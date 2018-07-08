import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


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
import { SearchDetailsComponent } from './search-details/search-details.component';


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
    SearchDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
