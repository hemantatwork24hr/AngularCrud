import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  private results = [];
  constructor(private http: HttpClient) { }

  private search( term ) {
    console.log(term);
    this.http.get(`https://swapi.co/api/people/?search=${term}`).toPromise()
              .then((data: any) => {
              /* tslint:disable:no-console */
              console.time('request-length');
              console.log(data);
              console.timeEnd('request-length');
              this.results = data.results;
    } );
  }

}