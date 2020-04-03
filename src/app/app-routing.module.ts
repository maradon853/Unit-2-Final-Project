import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuterSpaceComponent } from './outer-space/outer-space.component';
import { PlanetsComponent } from './planets/planets.component';
import { RullingPlanetComponent } from './rulling-planet/rulling-planet.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: "", component: AppComponent },
  { path: "planets", component: PlanetsComponent },
  { path: "rulling planet", component: RullingPlanetComponent },
  { path: "apod", component: OuterSpaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
