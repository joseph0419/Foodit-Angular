import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Food} from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  private foodsUri = 'https:localhost:5001/api/food';
  private handleError<T>(operation='operation', result?:T){
    return (error: any):Observable<T>=>{
      console.error(`${operation} failed:${error.message}`);
      return of (result as T);
    }
  }
  constructor(private http:HttpClient) { }

  getFood(){
    console.log("get food method is being called")
    return this.http.get<Food[]>(this.foodsUri).pipe(
      tap(_=>console.log('fetched food')),
      catchError(this.handleError<Food[]>('getFoods',[]))
    )
  }
}
