import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/LoginPage/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './Components/HomePage/homepage/homepage.component';
import { QuizpageComponent } from './Components/HomePage/QuizPage/quizpage/quizpage.component';
import { HeaderComponent } from './Components/HomePage/QuizPage/quizpage/header/header.component';
import { FooterComponent } from './Components/HomePage/QuizPage/quizpage/footer/footer.component';
import { SubheaderComponent } from './Components/HomePage/QuizPage/quizpage/subheader/subheader.component';
import { BodyComponent } from './Components/HomePage/QuizPage/quizpage/body/body.component';
import { ExplinationComponent } from './Components/HomePage/QuizPage/quizpage/explination/explination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    QuizpageComponent,
    HeaderComponent,
    FooterComponent,
    SubheaderComponent,
    BodyComponent,
    ExplinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
