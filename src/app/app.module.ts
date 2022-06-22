import {AbstractSwitchComponent} from './switches/abstract-switch/abstract-switch.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ClickSwitchComponent} from './switches/click-switch/click-switch.component';
import {EthernetSwitchComponent} from './switches/ethernet-switch/ethernet-switch.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {RaspberrySwitchComponent} from './switches/raspberry-switch/raspberry-switch.component';
import {SensorsComponent} from './sensors/sensors.component';
import {SwitchApiService} from './switch-api.service';
import {TwowaySwitchComponent} from './switches/twoway-switch/twoway-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent,
    MainComponent,
    ClickSwitchComponent,
    AbstractSwitchComponent,
    TwowaySwitchComponent,
    EthernetSwitchComponent,
    RaspberrySwitchComponent
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
