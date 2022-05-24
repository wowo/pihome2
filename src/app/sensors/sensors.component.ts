import {Component, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';

@Component({
    selector: 'app-sensors',
    templateUrl: './sensors.component.html',
    styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {
    public chartOptions: EChartsOption = {
        legend: {},
        tooltip: {
            trigger: 'axis',
        },
        dataset: {
            source: [
                ['2022-05-24 10:00:00', 400, 600],
                ['2022-05-24 10:05:00', 450, 550],
                ['2022-05-24 10:10:00', 500, 640],
            ],
            dimensions: ['timestamp', 'sensor 1', 'sensor 2'],
        },
        xAxis: {type: 'time'},
        yAxis: {},
        series: [
            {
                name: 'sensor 1',
                type: 'line',
                encode: {x: 'timestamp', y: 'sensor 1'}
            },
            {
                name: 'sensor 2',
                type: 'line',
                encode: {x: 'timestamp', y: 'sensor 2'}
            },
        ]
    }

    ngOnInit(): void {
    }

}
