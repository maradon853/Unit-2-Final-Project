import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuterSpaceComponent } from './outer-space/outer-space.component';
import { RulingPlanetComponent } from './ruling-planet/ruling-planet.component';
import { SignsComponent } from './signs/signs.component';

const routes: Routes = [
  
//routing paths for the navigation menu links
  { path: "signs", component: SignsComponent },
  { path: "ruling planet", component: RulingPlanetComponent },
  { path: "apod", component: OuterSpaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
