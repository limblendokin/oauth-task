import { Component, OnInit } from '@angular/core';
import { Friend } from '../../models/Friend';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {
  isAuthenticated:boolean;
  friends: Friend[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getFriends().subscribe((data:any) => {
      if(data.success){
        this.friends = data.friends;
        this.isAuthenticated = true;
      }
      else{
        this.isAuthenticated = false;
        this.friends = [];
      }
    })
    
  }

}
