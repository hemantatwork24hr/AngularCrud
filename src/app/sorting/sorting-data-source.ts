import { CollectionViewer, DataSource} from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { SortingService } from './sorting.service';
import { catchError } from "rxjs/operators";

export class SortingDataSource implements DataSource<any> {

    private employees = new BehaviorSubject<any>( [] );

    constructor( private sortingService: SortingService ) { }

    connect( collectionViewer: CollectionViewer): Observable<any> {
        console.log("Connecting data source");
        return this.employees.asObservable();
    }

    disconnect( collectionViewer: CollectionViewer ): void {
        this.employees.complete();
    }

    loadEmployees( sortDirection:string, sortBy:string, pageIndex, pageSize ) {

        this.sortingService.findEmployees( sortDirection, sortBy, pageIndex, pageSize ).pipe(
            catchError( () => of( [] ) )
        ).subscribe(
            ( emp ) => { 
                this.employees.next( emp );
            }
        );
        
    }

}
