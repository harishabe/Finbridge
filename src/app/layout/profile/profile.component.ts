import { Component, OnInit } from '@angular/core';
import { Icons } from './../../config/icon.config';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  expandToggle: Boolean = true;
  constructor(private icon:Icons) { }

  ngOnInit() {
  }

  expand() {
    this.expandToggle = !this.expandToggle;
  }
}
