import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

@Injectable()

export class EmployeeService {
	
	constructor( private httpClient: HttpClient ) {}

	private listEmployees: Employee[] = [
		{
			id: 1,
			name: 'Mark',
			gender: 'Male',
			contactPreference: 'Email',
			email: 'mark@prigmtech.com',
			dateOfBirth: new Date( '10/25/1988'),
			department: '3',
			isActive: true,
			photoPath: 'assets/images/1.jpeg'
		},
		{
			id: 2,
			name: 'John',
			gender: 'Male',
			contactPreference: 'Phone',
			email: 'john@prigmtech.com',
			dateOfBirth: new Date( '08/09/1990'),
			department: '3',
			isActive: true,
			photoPath: 'assets/images/2.jpg'
		},
		{
			id: 3,
			name: 'Mary',
			gender: 'Female',
			contactPreference: 'Email',
			email: 'mary@prigmtech.com',
			dateOfBirth: new Date( '01/30/1998'),
			department: '4',
			isActive: true,
			photoPath: 'assets/images/3.png'
		}
	];

	getEmployees(): Observable<Employee[]> {
		// return Observable.of( this.listEmployees ).delay( 2000 );
		return this.httpClient.get<Employee[]>( 'http://localhost:3000/employees');
	}

	private handleError( errorResponse: HttpErrorResponse ) {
		if( errorResponse.error instanceof ErrorEvent ) {
			console.error( 'Client Side Error: ', errorResponse.error.message );
		} else {
			console.error( 'Server Side Error: ', errorResponse );
		}

	}

	getEmployee( id: number ): Employee {
		return this.listEmployees.find( e => e.id === id );
	}

	save( employee: Employee ): Observable<Employee> {
		if( employee.id === null ) {
			/*const maxid = this.listEmployees.reduce( function ( e1, e2 ) {
				return( e1.id > e2.id )? e1 : e2;
			} ).id;
			employee.id = maxid + 1;
			this.listEmployees.push( employee );*/

			return this.httpClient.post<Employee>( 'http://localhost:3000/employees', employee, {
				headers: new HttpHeaders({
					'Content-Type': 'application/json'
				})
			} );
		} else {
			/*const foundIndex = this.listEmployees.findIndex( e => e.id === employee.id );
			this.listEmployees[foundIndex] = employee;*/
		}
		
	}

	deleteEmployee( id: number ) {
		const i =this.listEmployees.findIndex( e => e.id === id );
		if( i !== -1 ) {
			this.listEmployees.splice( i, 1 );
		}
	}
}