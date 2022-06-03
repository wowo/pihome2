import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';
import {NgxEchartsModule} from "ngx-echarts";
import {SensorsComponent} from './sensors/sensors.component';
import {SwitchApiService} from "./switch-api.service";

@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    BrowserAnimationsModule,
  ],
  providers: [SwitchApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
