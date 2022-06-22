import { Component, OnInit } from '@angular/core';
import {EthernetSwitchComponent} from "../ethernet-switch/ethernet-switch.component";

@Component({
  selector: 'app-raspberry-switch',
  templateUrl: '../ethernet-switch/ethernet-switch.component.html',
  styleUrls: ['../ethernet-switch/ethernet-switch.component.scss']
})
export class RaspberrySwitchComponent extends EthernetSwitchComponent {

}
