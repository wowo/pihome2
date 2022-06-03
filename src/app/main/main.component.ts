import {Component, inject, OnInit} from '@angular/core';
import {SwitchApiService} from "../switch-api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private switchApi: SwitchApiService) {
  }

  ngOnInit(): void {
    this.switchApi.fetch();
  }

}
