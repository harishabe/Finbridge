import { Component, OnInit } from '@angular/core';
import { Icons } from './../../config/icon.config';
@Component({
    selector: 'app-order-place',
    templateUrl: './orderPlace.component.html'
})
export class OrderPlaceComponent implements OnInit {
    expandToggle: Boolean = true;
    constructor(private icon: Icons) { }

    ngOnInit() {
    }

    expand() {
        this.expandToggle = !this.expandToggle;
    }
}
