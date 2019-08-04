import { Component, OnInit } from '@angular/core';

//Required Dependencies inserted

import { FormBuilder, Validators } from '@angular/forms';  

import { Observable } from 'rxjs';  
 
import { CrudService } from 'shared/crud.service';

//import {Crud} from 'shared/crud';


import {CrudNew} from 'src/app/crud-new'


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CRUDComponent implements OnInit {

  datasaved = false;
  crudnewform:any;
  allEmployees:Observable<CrudNew[]>;
  crudIDUpdate = null;
  message = null;


  constructor(private formbuilder:FormBuilder,private crudservice:CrudService) { }

  ngOnInit() {

    this.crudnewform=this.formbuilder.group(
      {
          EmpID:    ['',[Validators.required]],
          EmpName:  ['',[Validators.required]],
          DOB:      ['',[Validators.required]],
          Gender:   ['',[Validators.required]],
          EmailID:  ['',[Validators.required]]
      });

      this.loademployees();
  }

  loademployees(){
    this.allEmployees=this.crudservice.getallEmployees();
  }

  onFormSubmit() {  
    this.datasaved = false;  
    const crudnew= this.crudnewform.value;
    
    this.CreateEmployee(crudnew);  
    this.crudnewform.reset();  
  }

  loadEmployeeToEdit(crudID: string) {  
    this.crudservice.getEmployeeByID(crudID).subscribe(crudnew=> {  
      this.message = null;  
      this.datasaved = false;  
      
      this.crudIDUpdate = crudnew.EmpID
      this.crudnewform.controls['EmpName'].setValue(crudnew.EmpName);  
      this.crudnewform.controls['DOB'].setValue(crudnew.DOB);  
      this.crudnewform.controls['EmailID'].setValue(crudnew.EmailID);  
      this.crudnewform.controls['Gender'].setValue(crudnew.Gender);  
    
    });  
    }  


    CreateEmployee(crudnew: CrudNew) {  

      console.log("the value of before if  "+this.crudIDUpdate);
      if (this.crudIDUpdate == null) 
      {  
        this.crudservice.createEmployee(crudnew).subscribe(
          () => {  

             // control is not coming here
            console.log("the value of id "+this.crudIDUpdate);
            this.datasaved = true;  
            this.message = 'Record saved Successfully';
            this.crudIDUpdate=crudnew.EmpID+1;
            console.log("the value of id 1 "+this.crudIDUpdate);
            this.loademployees();  
            console.log("the value of id  2 "+this.crudIDUpdate);
            this.crudIDUpdate = null;  
            this.crudnewform.reset();  
          }  
        );  
      } else {  
        
        crudnew.EmpID = this.crudIDUpdate;  
        this.crudservice.updateEmployee(crudnew).subscribe(() => {  
          this.datasaved = true;  
          this.message = 'Record Updated Successfully';  
          this.loademployees();  
          this.crudIDUpdate = null;  
          this.crudnewform.reset();  
        });  
      }  
    } 

deleteEmployee(employeeId: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.crudservice.deleteEmployeeById(employeeId).subscribe(() => {  
      this.datasaved = true;  
      this.message = 'Record Deleted Succefully';  
      this.loademployees();
      this.crudIDUpdate = null;  
      this.crudnewform.reset();  
  
    });  
  }

}
resetForm() {  
    this.crudnewform.reset();  
    this.message = null;  
    this.datasaved = false;  
  }  
}
