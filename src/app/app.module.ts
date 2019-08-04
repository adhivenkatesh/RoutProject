import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

import { CollapseModule } from 'bootstrap';
// Here we have to implement routher module

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'shared/users.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ManagementComponent } from './management/management.component';
import { CRUDComponent } from './crud/crud.component';


// error handling 
import { GlobalErrorHandler } from 'shared/global-error-handler.service';


// Callong crud sservice
import {
  MatButtonModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule, MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule,
  MatInputModule, MatTooltipModule, MatToolbarModule
} from '@angular/material';

import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { crud } from './crud'
import { CrudService } from 'shared/crud.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { ErrorComponent } from './shared/error/error.component';




// here configure route and we have to call router class which coming from routermodule.
const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserheaderComponent },
  { path: 'users/:id', component: UserdetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'crud', component: CRUDComponent },
  { path: 'error', component: ErrorComponent },  // em=> error message
  { path: 'employee',component:EmployeeComponent},
 
  // this non matching routs with **
  { path: '**', redirectTo: 'error' }
]



@NgModule({
  declarations: [
    AppComponent,
    UserheaderComponent,
    UserdetailsComponent,
    AboutComponent,
    ContactComponent,
    ManagementComponent,
    CRUDComponent,
    EmployeeComponent,
    EmployeeListComponent,
    ErrorComponent
  ],
  imports: [

    // here we have to enable httpservice - httpclientmodule
    // here we have to pass the routemodule

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  providers: [UsersService, MatDatepickerModule, CrudService, { provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
