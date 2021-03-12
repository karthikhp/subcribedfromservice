import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicecService {
private date = new Subject<any>();
  constructor() {
    
   }
   setDate(value:any) {
    this.date.next(value);
  }
  getDate(): Observable<any> {
    return this.date.asObservable();
  }
   gettime(){
     setInterval(()=>{
    this.setDate(new Date())
     },1000)
   }
}
