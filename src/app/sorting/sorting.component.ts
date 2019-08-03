import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SortingDataSource } from './sorting-data-source';
import { SortingService } from './sorting.service';
import { MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { merge } from "rxjs";

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit, AfterViewInit {

  dataSource: SortingDataSource;
  displayedColumns: string[] = [ "id", "employee_name", "employee_salary", "employee_age" ];

  @ViewChild( MatPaginator ) paginator: MatPaginator;
  @ViewChild( MatSort ) sort: MatSort;

  constructor( private sortingService: SortingService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.dataSource = new SortingDataSource( this.sortingService );
    this.dataSource.loadEmployees( 'asc', 'id', 0, 2 );
  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge( this.sort.sortChange, this.paginator.page )
    .pipe(
        tap(() => this.loadEmployeesPage())
    )
    .subscribe();
  }

  loadEmployeesPage() {

    this.dataSource.loadEmployees( 
      this.sort.direction,
      this.sort.active,
      this.paginator.pageIndex, 
      this.paginator.pageSize );
  }
}
