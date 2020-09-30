import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../../models/Friend';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() friend : Friend;
  constructor() { }

  ngOnInit(): void {
  }

}
