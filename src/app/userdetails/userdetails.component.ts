import { Component, OnInit } from '@angular/core';

// for user details we have to use activated route

import {ActivatedRoute} from '@angular/router';

// Here we have to inject user details to that inject user service

import { UsersService} from 'shared/users.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

user:any;

  constructor(private activateroute:ActivatedRoute,private userserice:UsersService) { }

  ngOnInit() {

      // we have to store this value as a id and use this into a id
    //console.log(this.activatedroute.snapshot.params['id']);

    let id = this.activateroute.snapshot.params['id'];

    // here observable
    this.userserice.getUserDetails(id).subscribe(u=>{
      
      this.user= u;
    })
  
  }

}
