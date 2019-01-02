import { Component, OnInit } from '@angular/core';
import { Icons } from './../../config/icon.config';

@Component({
  selector: 'app-add-existing',
  templateUrl: './add-existing.component.html',
  styleUrls: ['./add-existing.component.scss']
})
export class AddExistingComponent implements OnInit {

  constructor(private icon: Icons) { }

  ngOnInit() {
  }

}
