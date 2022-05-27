import {Component, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-sensors',
    templateUrl: './sensors.component.html',
    styleUrls: ['./sensors.component.scss']
})

export class SensorsComponent implements OnInit {

    public URL = 'https://pihome.sznapka.pl/api/reading'; // '/assets/readings.json'

    public chartLoaded = false;
    public dateFrom: string | null = '';
    public dateTo: string | null = '';

    constructor(private http: HttpClient) {
        let yesterday = new Date();
        yesterday.setDate((new Date).getDate() - 1);
        this.dateFrom = new DatePipe('en').transform(yesterday, 'YYYY-MM-dd');
        this.dateTo = new DatePipe('en').transform(new Date(), 'YYYY-MM-dd');
    }

    public chartOptions: EChartsOption = {
        legend: {},
        xAxis: {type: 'time'},
        yAxis: [
          {scale: true, position: 'left'},
          {scale: true, position: 'right'},
        ],
        tooltip: {
            trigger: 'axis',
            show: true,
        },
    }

    ngOnInit(): void {
        this.loadChartData();
    }

    public loadChartData() {
        this.chartLoaded = false;
        let url = this.URL + `?since=${this.dateFrom}&until=${this.dateTo}`;
        this.http.get<ApiResponse>(url, {withCredentials: true}).subscribe((data: ApiResponse) => {
            const keys = Object.keys(data['_embedded'][0]);
            this.chartOptions.dataset = {
                source: data['_embedded'].map(Object.values),
                dimensions: keys,
            }
            this.chartOptions.series = keys.slice(1).map((val: string) => ({
                name: val.replace('_', ' '),
                type: 'line',
                symbol: 'none',
                yAxisIndex: val.includes('light') ? 1 : 0,
                encode: {x: 'timestamp', y: val}

            }));
            this.chartLoaded = true;
        });
    }
}
class ApiResponse {
    public _embedded: Array<any> = [];
}

