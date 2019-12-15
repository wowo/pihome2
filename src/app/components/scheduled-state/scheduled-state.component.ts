import {Component, Input, OnInit} from '@angular/core';
import {Switch} from '../switch-list/models/switch';

@Component({
    selector: 'app-scheduled-state',
    templateUrl: './scheduled-state.component.html',
    styleUrls: ['./scheduled-state.component.scss']
})
export class ScheduledStateComponent implements OnInit {

    @Input() switch: Switch;

    constructor() {
    }

    ngOnInit() {
    }

}
