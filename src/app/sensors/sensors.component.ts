import {Component, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-sensors',
    templateUrl: './sensors.component.html',
    styleUrls: ['./sensors.component.scss']
})

export class SensorsComponent implements OnInit {

    public loading = true;

    constructor(private http: HttpClient) {
    }

    public chartOptions: EChartsOption = {
        legend: {},
        xAxis: {type: 'time'},
        yAxis: {scale: true},
        tooltip: {
            trigger: 'axis',
            show: true,
        },
    }

    ngOnInit(): void {
        this.http.get<ApiResponse>('/assets/readings.json').subscribe((data: ApiResponse) => {
            const keys = Object.keys(data['_embedded'][0]);
            this.chartOptions.dataset = {
                source: data['_embedded'].map(Object.values),
                dimensions: keys,
            }
            this.chartOptions.series = keys.slice(1).map(val => ({
                name: val.replace('_', ' '),
                type: 'line',
                symbol: 'none',
                encode: {x: 'timestamp', y: val}

            }));
            this.loading = false;
        });
    }

}
class ApiResponse {
    public _embedded: Array<any> = [];
}

