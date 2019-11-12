import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Sensor} from './models/sensor';

@Component({
    selector: 'app-sensor-list',
    templateUrl: './sensor-list.component.html',
    styleUrls: ['./sensor-list.component.scss']
})
export class SensorListComponent implements OnInit {

    sensors = new Map<string, Sensor>();
    sensorsList = new Array<Array<string>>();

    constructor(private socket: Socket) {
        if (localStorage.getItem('sensors')) {
            this.sensorsList = JSON.parse(localStorage.getItem('sensors'));
            this.sensorsList.forEach((x) => {
                this.sensors.set(x[0], {key: x[0], name: x[1]} as Sensor);
            })
        }
    }

    ngOnInit() {
        this.socket.fromEvent<Sensor>('sensor').subscribe(sensor => {
            this.sensors.set(sensor.key, sensor);

            this.sensorsList.push([sensor.key, sensor.name]);
            localStorage.setItem('sensors', JSON.stringify(this.sensorsList));
        });
    }

}
