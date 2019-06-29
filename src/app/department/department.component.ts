import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

	employeeForm: FormGroup;

  	constructor() { }

  	ngOnInit() {
  		this.employeeForm = new FormGroup({
  			fullName: new FormControl(),
  			email: new FormControl()
  		});
  	}

}
