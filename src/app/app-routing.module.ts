import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuterSpaceComponent } from './outer-space/outer-space.component';
import { RulingPlanetComponent } from './ruling-planet/ruling-planet.component';
import { AppComponent } from './app.component';
import { SignsComponent } from './signs/signs.component';

const routes: Routes = [
  //{ path: "", component: AppComponent },
  { path: "signs", component: SignsComponent },
  { path: "rulling planet", component: RulingPlanetComponent },
  { path: "apod", component: OuterSpaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
