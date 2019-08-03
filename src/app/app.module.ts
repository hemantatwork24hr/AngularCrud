import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive'; 
import { EmployeeService } from './employees/employee.service';


import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactiveGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { DepartmentComponent } from './department/department.component';
import { PracticeComponent } from './practice/practice.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found.component';
import { AccordionComponent } from './shared/accordion.component';
import { SortingComponent } from './sorting/sorting.component';
import { MatPaginatorModule, MatSortModule, MatTableModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const appRoutes: Routes = [
  { path: 'list', 
    component: ListEmployeesComponent,
    resolve: { employeeList: EmployeeListResolverService } },
  { 
    path: 'edit/:id', 
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactiveGuardService] },

  { path: 'employees/:id', 
    component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardService ] },
  { path: 'department', component: DepartmentComponent },
  { path: 'practice', component: PracticeComponent },
  // { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'notfound', component: PageNotFoundComponent },
  { path: '', component: SortingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    DepartmentComponent,
    PracticeComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent,
    AccordionComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes ),
    FormsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    MatPaginatorModule, 
    MatSortModule, 
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeService, EmployeeDetailsGuardService, CreateEmployeeCanDeactiveGuardService, EmployeeListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
