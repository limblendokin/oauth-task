import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  
  vkAuthClick(){
    this.dataService.getAuth().subscribe( (data:any) => {
      console.log(data);
    })
  }
}
