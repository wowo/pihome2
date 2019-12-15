import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SensorListComponent} from './components/sensor-list/sensor-list.component';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {environment} from '../environments/environment';
import {MomentModule} from 'ngx-moment';
import { SwitchListComponent } from './components/switch-list/switch-list.component';
import { NameShortenerPipe } from './components/switch-list/name-shortener.pipe';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ScheduledStateComponent } from './components/scheduled-state/scheduled-state.component';

const config: SocketIoConfig = {url: environment.socketServer, options: environment.socketOptions};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SocketIoModule.forRoot(config),
        MomentModule,
    ],
    declarations: [
        AppComponent,
        SensorListComponent,
        SwitchListComponent,
        NameShortenerPipe,
        ToggleComponent,
        ScheduledStateComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
