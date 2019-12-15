import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Sensor} from './models/sensor';

@Component({
    selector: 'app-sensor-list',
    templateUrl: './sensor-list.component.html',
    styleUrls: ['./sensor-list.component.scss']
})
export class SensorListComponent implements OnInit {

    lastUpdate: string = null;
    sensors = new Map<string, Sensor>();
    sensorsList = new Array<Array<string>>();

    constructor(private socket: Socket) {
        if (localStorage.getItem('sensors')) {
            this.sensorsList = JSON.parse(localStorage.getItem('sensors')) || [];
            this.sensorsList.forEach((x) => {
                this.sensors.set(x[0], {key: x[0], name: x[1]} as Sensor);
            });
        }
    }

    ngOnInit() {
        console.log('Connecting');
        const self = this;
        this.socket.fromEvent<Sensor>('sensor').subscribe(sensor => {
            self.sensors.set(sensor.key, Object.assign(new Sensor(), sensor));
            self.lastUpdate = sensor.when;

            if (self.sensorsList.filter(x => x[0] === sensor.key).length === 0) {
                self.sensorsList.push([sensor.key, sensor.name]);
                localStorage.setItem('sensors', JSON.stringify(self.sensorsList));
            }
        });
    }

}
