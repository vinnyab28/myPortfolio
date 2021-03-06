import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { CoreModule } from "./core/core.module";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentBoxComponent } from './content-box/content-box.component';
import { MainComponent } from './main/main.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentBoxComponent,
    MainComponent,
    WorkExperienceComponent,
    PersonalProjectsComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
