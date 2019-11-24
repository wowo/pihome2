import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Switch} from "./models/switch";

@Component({
    selector: 'app-switch-list',
    templateUrl: './switch-list.component.html',
    styleUrls: ['./switch-list.component.scss']
})
export class SwitchListComponent implements OnInit {

    switches = new Map<string, any>();
    switchList = new Array<Array<string>>();

    constructor(private socket: Socket) {
    }

    ngOnInit() {
        console.log('Connecting');
        const self = this;
        this.socket.fromEvent<Switch>('switch').subscribe((sw: Switch) => {
            self.switches.set(sw.key, sw);

            if (self.switchList.filter(x => x[0] === sw.key).length === 0) {
                self.switchList.push([sw.key, sw.name]);
                localStorage.setItem('switchesList', JSON.stringify(self.switchList));
            }
        });
    }

    getClass(sw: Switch): string {
        if (sw.stateless) {
            return '';
        }
        switch (sw.state) {
            case '1':
            case 1:
                return 'state-on';
            case '0':
            case 0:
                return 'state-off';
            default:
                return '';

        }
    }
}
