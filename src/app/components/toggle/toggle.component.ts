import {Component, Input, OnInit} from '@angular/core';
import {Switch} from "../switch-list/models/switch";

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  @Input() switch: Switch;

  constructor() { }

  ngOnInit() {
  }

}
