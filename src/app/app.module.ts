import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './user/auth/signup/signup.component';
import { LoginComponent } from './user/auth/login/login.component';
import { FooterComponent } from './user/footer/footer/footer.component';
import { HeaderComponent } from './user/header/header/header.component';
import { AboutUsComponent } from './user/footer/about-us/about-us.component';
import { HomecontentComponent } from './user/home/homecontent/homecontent.component';
import { PageNotFoundComponent } from './user/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    HomecontentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
