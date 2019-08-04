import { Injectable, ErrorHandler, Injector } from '@angular/core';

import { Router,NavigationExtras } from '@angular/router';

import { Subject, observable, Observable } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {

  id: any

  public errorDetails: any;

  private subject = new Subject<any>();

  // sendError(): Observable<any> {
  //   return this.subject.asObservable();
  // }

sendError(){}

  errorMethod(): any {

    return "yes";
  }

  constructor(private injector: Injector, private http: HttpClient) { }


  public ErrMthd(): any {


  }


let 

  getErrorDetails(): any { };

  // creating error methods here...
  handleError(error: any) {



    const router = this.injector.get(Router)

    console.log('Request URL : ${router.url}');

    if (error instanceof HttpErrorResponse) {

      console.error("Back-end Returned status code", error.status);
      console.error("Respose Body ", error.message);
      this.id = error.message + " , Status : " + error.status;
      console.log("em :" + this.id);

      // this.errorMethod=error.message.toString;

      // this.ErrMthd=error.message.toString;

      //alert("inside id "+ this.ErrMthd);

    }
    else {
      //alert(error.message);

      //-      console.error("En Error occured ", error.message);

      this.id = error.message;

      this.ErrMthd = error.message;

      // alert("inside id " + this.id);
    }




    this.getErrorDetails = error.message;

    // return this.errorDetails;


    this.errorDetails = error.message;

    //alert("outside id " + this.errorDetails);
    console.log("outside id " + this.id);

    this.sendError()
    {
      //working alert("error in service " + this.errorDetails);
      //this.subject.next({ text: this.errorDetails })
     
     this.errorDetails = error.message;
    }


    //window.alert('Error occured :'+this.errorDetails);

    router.navigate(['error']);

    //router.navigateUrl('/');

  }







}
