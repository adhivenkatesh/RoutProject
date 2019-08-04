import { Injectable } from '@angular/core';

import {HttpClient,HttpErrorResponse}  from '@angular/common/http';

import { catchError, map, retry } from 'rxjs/operators';

import { from ,Observable,throwError} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getusers(){
     return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(catchError(this.errorHandler));
    
   //return this.http.get('https://jsonplaceholder.typicode.com/users0');

  }

  errorHandler(err:HttpErrorResponse)
  {
    console.log('error in userservice.'+err.status);
    //return Observable.throw(err.status);
    return throwError(err.status);
    
 }

 // user details go here...
    
 getUserDetails(id:number){
  return  this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
}
}
