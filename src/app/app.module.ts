import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {SensorListComponent} from './components/sensor-list/sensor-list.component';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import {environment} from '../environments/environment';

const config: SocketIoConfig = {url: environment.socketServer, options: {}};

@NgModule({
    imports: [BrowserModule, FormsModule, SocketIoModule.forRoot(config)],
    declarations: [AppComponent, HelloComponent, SensorListComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
