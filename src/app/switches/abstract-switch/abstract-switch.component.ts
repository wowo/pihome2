import {Component, Input, OnInit} from '@angular/core';
import {Switch} from "../../api-response";

@Component({
  selector: 'app-abstract-switch',
  template: '',
  styles: []
})
export class AbstractSwitchComponent implements OnInit {

  @Input()
  data!: Switch;

  constructor() { }

  ngOnInit(): void {
  }

}
