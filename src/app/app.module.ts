import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorsComponent } from './sensors/sensors.component';
import {NgxEchartsModule} from "ngx-echarts";

@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      NgxEchartsModule.forRoot({
        echarts: () => import('echarts'),
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
