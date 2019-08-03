import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ISorting } from './sorting.model';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor( private http: HttpClient ) { 

  }

  findEmployees( sortOrder:string, sortBy:string, pageNumber, pageSize ): Observable<any> {
    
    return this.http.get( 'http://dummy.restapiexample.com/api/v1/employees', {
      params: new HttpParams()
          .set('sortOrder', sortOrder.toString() )
          .set('sortBy', sortBy.toString() )
          .set('pageNumber', pageNumber )
          .set('pageSize', pageSize )
      }
    ).pipe(
      map(  res => res )
    );
  }
}
