import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { CustomerComponent } from './customer/customer.component';

const routes : Routes = [
	{ path: '', component : DepartmentComponent },
	{ path: 'department', component: DepartmentComponent },
	{ path: 'customer', component: CustomerComponent },
	{ path: 'lazy1', loadChildren: 'app/lazy/lazy.module#LazyModule'}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);