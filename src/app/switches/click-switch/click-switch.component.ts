import { Component, OnInit } from '@angular/core';
import {AbstractSwitchComponent} from "../abstract-switch/abstract-switch.component";

@Component({
  selector: 'app-click-switch',
  templateUrl: './click-switch.component.html',
  styleUrls: ['./click-switch.component.scss']
})
export class ClickSwitchComponent extends AbstractSwitchComponent {
}
