import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FormAnalysisService } from './form-analysis.service';
import { FlashMessagesModule } from 'flash-messages-angular';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes=[
  {path:'', component:HomePageComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'personalarea', component:PersonalAreaComponent},
  {path:'auth', component:AuthComponent},
  {path:'about', component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    RegistrationComponent,
    HomePageComponent,
    AboutComponent,
    PersonalAreaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [FormAnalysisService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
