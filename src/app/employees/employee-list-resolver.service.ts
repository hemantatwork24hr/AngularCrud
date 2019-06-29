import { Employee } from '../models/employee.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EmployeeService } from '../employees/employee.service';
import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeListResolverService implements Resolve<Employee[]> {
	
	constructor( private _employeeService: EmployeeService ) {}

	resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable< Employee[]>  {
		return this._employeeService.getEmployees();
	}
}