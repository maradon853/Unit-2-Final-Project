import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignsComponent } from './signs/signs.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OuterSpaceComponent } from './outer-space/outer-space.component';
import { RulingPlanetComponent } from './ruling-planet/ruling-planet.component';

@NgModule({
  declarations: [
    AppComponent,
    SignsComponent,
    OuterSpaceComponent,
    RulingPlanetComponent,
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
