import { Component, OnInit } from '@angular/core';


import { UsersService } from 'shared/users.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
//import { createWriteStream } from 'fs';


@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.scss']
})
export class UserheaderComponent implements OnInit {

  constructor(private userservice:UsersService) { }
  
  users:any;

  statusMessage:any='Loading...';

  gettingerror:any;


  ngOnInit() {


    this.userservice.getusers().subscribe((data)=>{ this.users=data; 
      console.log("USERS COUNT not in error "+this.users);
      this.statusMessage='successfully loaded..'
    }   
    ,(err:any)=>{
 
     // alert(typeof(err));

      if (err===404)
      {
        console.log("USERS COUNT"+this.users);
      console.log("the error iin component :- "+err);
      console.log("in number"+ err);

        this.statusMessage= " ------ The resource page is not available -----------"
      }
       else
  
       this.statusMessage= err;  
        
    })
    }

  }
  
  
  
  

