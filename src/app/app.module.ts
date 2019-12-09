import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBannerComponent } from './component/main/main-banner/main-banner.component';
import { MainBodyComponent } from './component/main/main-body/main-body.component';
import { MainFooterComponent } from './component/main/main-footer/main-footer.component';
import { MainHeaderComponent } from './component/main/main-header/main-header.component';
import { SigninComponent } from './component/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponent,
    MainBodyComponent,
    MainFooterComponent,
    MainHeaderComponent,
    SigninComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
