import { Injectable } from '@angular/core';

import {Employee} from 'shared/employee';

import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import {map,catchError, retry} from 'rxjs/operators';
import {Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

formData:Employee;
list : Employee[];

readonly rootUrl='';

constructor(private http:HttpClient) { }

postEmployee(formData : Employee){
   //return this.http.post(this.rootURL+'/Employee',formData)
}

putEmployee(formData : Employee){
    //return this.http.put(this.rootURL+'/Employee/'+formData.EmployeeID,formData);
     
   }

 deleteEmployee(id : number){
    //return this.http.delete(this.rootURL+'/Employee/'+id);
   }


refreshList(){
    // this.http.get(this.rootURL+'/Employee')
    // .toPromise().then(res => this.list = res as Employee[]).catch((error)=>{
    //   return Observable.throw(error);
    //})
    //console.log(this.rootURL+'/Employee');
  }

}
