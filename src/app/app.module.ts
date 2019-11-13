import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SensorListComponent} from './components/sensor-list/sensor-list.component';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {environment} from '../environments/environment';
import {MomentModule} from 'ngx-moment';

const config: SocketIoConfig = {url: environment.socketServer, options: {}};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SocketIoModule.forRoot(config),
        MomentModule,
    ],
    declarations: [
        AppComponent,
        SensorListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
