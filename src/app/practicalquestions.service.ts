import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {HttpErrorResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PracticalquestionsService {

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };
  

  constructor(public hc:HttpClient) { }
  quesPatternUrl="https://api.mlab.com/api/1/databases/pratical_test/collections/question_pattern?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";
  
  fetchQuestionData(){
    return this.hc.get(this.quesPatternUrl);
  }

  createQuestionData(n){
    return this.hc.post(this.quesPatternUrl,n,{});
  }

  delQuestionData(x){
   var deleteUrl="https://api.mlab.com/api/1/databases/pratical_test/collections/question_pattern/"+x._id.$oid+"?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";
   return this.hc.delete(deleteUrl);
  }

  editQuestionData(){

  }

}
