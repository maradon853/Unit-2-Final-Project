import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignsComponent } from './signs/signs.component';
import { SignDetailComponent } from './sign-detail/sign-detail.component';
import { YourSignFormComponent } from './your-sign-form/your-sign-form.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { HttpClientModule } from '@angular/common/http';
import { SignSearchComponent } from './sign-search/sign-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignsComponent,
    SignDetailComponent,
    YourSignFormComponent,
    HoroscopeComponent,
    SignSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
