import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { GlobalErrorHandler } from 'shared/global-error-handler.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

  constructor(private activateroute: ActivatedRoute, private errServie: GlobalErrorHandler) { }

  err: any;
  em1: any;

  ngOnInit() {

     

    

//  this.activateroute.params.subscribe(params=>{
//     this.err=Jparams;
//     alert(this.err);
//  })

 //alert ("----"+ JSON.stringify(Uthis.err));
    //("before......" + JSON.stringify(this.err));


    // this.errServie.sendError().subscribe(message => {


    //   console.log("messagge" + 'message');
    //   this.err = message;

    // });

    //alert("after....." + JSON.stringify(this.err));

    //  this.userservice.getusers().subscribe((data)=>{ this.users=data; 
    //       console.log("USERS COUNT not in error "+this.users);
    //       this.statusMessage='successfully loaded..'
    //     }   





    //alert("errrr" + this.err);

  }

  ngOnDestroy() {

    //this.err.unsubcribe();
  }

}
