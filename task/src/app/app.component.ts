import { Component, OnInit } from '@angular/core';
import { ServicecService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Date and time is subscribed from service click here';
  time:any
  constructor(private service:ServicecService){

 
  }
  ngOnInit(){
   this.service.gettime()
  }
  gettime(){
this.service.getDate().subscribe(res=>{
  this.time=res
})
  }
}
