import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Friend } from 'src/app/models/Friend';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  profile:Friend;
  isAuthentificated: Boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.isAuthentificated = false;
    this.dataService.getProfile().subscribe((data:any) => {
      if(data.success){
        this.profile = data.profile;
        this.isAuthentificated = true;
      }
      else{
        
        this.isAuthentificated = false;
      }
    })
  }
}
