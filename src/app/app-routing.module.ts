import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SensorsComponent} from "./sensors/sensors.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path: 'sensors', component: SensorsComponent},
  {path: '', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
