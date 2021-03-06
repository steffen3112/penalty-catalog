import { AssignedPenalty } from '../../models/AssignedPenalty';
import { Injectable } from '@angular/core';
import { Penalty } from '../../models/Penalty';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// FAKE DATA!!!!
import { teamPenalties, userPenalty } from '../fakeDashboardData.js';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PenaltyService {

  //~ Instance fields
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  private penaltyUrl = 'https://jsonplaceholder.typicode.com/posts';

  penalties: Penalty[] = [];
  
  //~ Constructors
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  constructor( private http: HttpClient ) { }

  //~ Methods
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
  /** GET todos from fake api */
  getPenalties(): Observable<Penalty[]> {

    return this.http.get<Penalty[]>(this.penaltyUrl)
      .pipe(
        tap( penalties => console.log('Fetched Penalty', penalties)),
        catchError(this.handleError<Penalty[]>('getUsers', []))
      );
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * FAKE Service, uses faked Data
   */
  getTeamPenalties(): AssignedPenalty[] {
    return teamPenalties;
  }

  /**
   * Fake Service, will return user specific penalties
   */
  getUserPenalties(): AssignedPenalty[] {
    return userPenalty;
  }

  /**
   * Calculates the users debts from the fake data array
   */
  getUsersDebts(): number {
    const calculatedSum = userPenalty.map( penalty => parseFloat(penalty.penalty.cost.substring(0, penalty.penalty.cost.length - 1)) )
                                    .reduce( ( a, b ) => a + b );
    return calculatedSum;
  }



}

