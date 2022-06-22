import {Component, OnInit} from '@angular/core';
import {SwitchApiService} from '../switch-api.service';
import {Switch} from '../api-response';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  switchesError: string | null = null;
  switches: any = {};

  constructor(private switchApi: SwitchApiService) {
  }

  ngOnInit(): void {
    this.switchApi.fetch().subscribe((switches) => {
      let grouped = new Map<string, Switch[]>();
      switches.forEach((x: Switch) => {
        let group = grouped.get(x.group) || [];
        group.push(x);
        grouped.set(x.group, group);
      })
      this.switches = grouped;
    });
  }

}
