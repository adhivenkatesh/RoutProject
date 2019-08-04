import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders}  from '@angular/common/http';

import { catchError, map, retry } from 'rxjs/operators';

import { from ,Observable,throwError} from 'rxjs';



import {CrudNew} from 'src/app/crud-new';




@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url='http://localhost:50351/Api/CRUDAPI';



  constructor(private http:HttpClient) { }

  getallEmployees():Observable<CrudNew[]>{
    return this.http.get<CrudNew[]>(this.url+'/AllEmployeeDetails');
  }

  getEmployeeByID(EmpID:string):Observable<CrudNew>{
    return this.http.get<CrudNew>(this.url+'/GetEmployeeDetailsByID/'+EmpID);
  }


  createEmployee(crudnew: CrudNew): Observable<CrudNew> {  
    
    //console.log('the value in the service crudnew '+ crudnew.EmpID);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 

    console.log('the value in the service  '+JSON.stringify(httpOptions) );


    return this.http.post<CrudNew>(this.url + '/InsertEmployeeDetails/',  
    crudnew, httpOptions);  
  }  
  updateEmployee(crudnew: CrudNew): Observable<CrudNew> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<CrudNew>(this.url + '/UpdateEmployeeDetails/',  
    crudnew, httpOptions);  
  }  
  deleteEmployeeById(EmpID: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' +EmpID,  
 httpOptions);  
  }  

}
  