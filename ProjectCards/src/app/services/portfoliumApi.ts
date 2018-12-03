import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { SortOrder } from '../enums/sortOrder';
import Constants from '../constants';
import Entry from '../models/entry';
import IEntry from '../interfaces/ientry';
import LoggerService from './logger';

@Injectable({ providedIn: 'root' })
export class PortfoliumApiService {

    private readonly baseUrl = "https://portfolium.com/proxy";
    constructor(private httpClient: HttpClient, private log: LoggerService) { }

    private static sortOrderToString(sort: SortOrder): string {
        switch (sort) {
            case SortOrder.Comments: return 'comments';
            case SortOrder.Likes: return 'likes';
            case SortOrder.Popular: return 'popular';
            case SortOrder.Recent: return 'recent';
            case SortOrder.Views: return 'views';
        }
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred.
            this.log.error(error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            this.log.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
          }
          // return an observable with a user-facing error message
          return throwError(
            'Something bad happened; please try again later.');
    }

    async expertEntries(first: number = 0, rows: number = Constants.maxPageSize, sort?: SortOrder, schoolId?: number, majorId?: number): Promise<Entry[]> {
        // Build query params
        const params: { [key: string]: string } = {
            offset: first.toString(),
            limit: rows.toString()
        };
        if (typeof sort !== 'undefined') {
            params.sort = PortfoliumApiService.sortOrderToString(sort);
        }

        if (typeof schoolId !== 'undefined') {
            params.school_id = schoolId.toString();
        }
        if (typeof majorId !== 'undefined') {
            params.major_id = majorId.toString();
        }

        return this.httpClient.get<IEntry[]>(this.baseUrl + '/entries/expert', {
            params: params
        })
        .pipe(map(entries => entries.map(entry => new Entry(entry))))
        .pipe(catchError(this.handleError))
        .toPromise();
    }

}