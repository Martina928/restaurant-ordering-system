import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './content/login/login.component';
import { RegisterComponent } from './content/register/register.component';
import { MenuComponent } from './content/menu/menu.component';
import { CheckOutComponent } from './content/check-out/check-out.component';
import { MemberComponent } from './content/member/member.component';
import { HomeComponent } from './content/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    CheckOutComponent,
    MemberComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
