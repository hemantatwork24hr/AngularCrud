import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})

export class ListEmployeesComponent implements OnInit {

  	employees: Employee[];
    filteredEmployees: Employee[];
    private _searchTerm: string;

    get searchTerm(): string {
      return this._searchTerm;
    }

    set searchTerm( value: string ) {
      this._searchTerm = value;
      this.filteredEmployees = this.filtereEmployees( value );
    }

    filtereEmployees( searchString: string ) {
      return this.employees.filter( employee => 
        employee.name.toLowerCase().indexOf( searchString.toLowerCase() ) !== -1 );
    }

  	constructor( private _employeeService: EmployeeService,
                 private _router: Router,
                 private _route: ActivatedRoute ) { 
        this.employees = this._route.snapshot.data[ 'employeeList' ];
        if( this._route.snapshot.queryParamMap.has( 'searchTerm' ) ) {
          this._searchTerm = this._route.snapshot.queryParamMap.get( 'searchTerm' );
        } else {
          this.filteredEmployees = this.employees;
        }
  	}

  	ngOnInit() {
  		/*this._employeeService.getEmployees().subscribe( ( empList ) => {
        this.employees  = empList ;
        console.log( 'Subscribe:' + new Date().toTimeString() );
        // Executed asynchronously hence adding in call back
        if( this._route.snapshot.queryParamMap.has( 'searchTerm' ) ) {
          this._searchTerm = this._route.snapshot.queryParamMap.get( 'searchTerm' );
        } else {
          this.filteredEmployees = this.employees;
          console.log( 'Else Block:' + new Date().toTimeString() );
        }
      });*/

  	}

    onDeleteNotification( id: number ) {
        const i =this.filteredEmployees.findIndex( e => e.id === id );
        if( i !== -1 ) {
          this.filteredEmployees.splice( i, 1 );
        }
    }


}
