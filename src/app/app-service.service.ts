import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(public hc:HttpClient) { }

  quesPatternUrl="https://api.mlab.com/api/1/databases/pratical_test/collections/question_pattern?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";

  qCategoryurl ="https://api.mlab.com/api/1/databases/pratical_test/collections/category?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";
  parentCategoryNull="https://api.mlab.com/api/1/databases/pratical_test/collections/category?q={%22parentCategoryId%22:%22null%22}&apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";
  

  mainCategoryData(){
    return this.hc.get(this.parentCategoryNull);
  }
  subCategoryData(i){
    var subCategorylevel="https://api.mlab.com/api/1/databases/pratical_test/collections/category?q={%22parentCategoryId%22:%22"+i+"%22}&apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo"
    return this.hc.get(subCategorylevel);
  }
  fetchQuestionData(){
    return this.hc.get(this.quesPatternUrl);
  }

  delQuestionData(x){
   var deleteUrl="https://api.mlab.com/api/1/databases/pratical_test/collections/question_pattern/"+x._id.$oid+"?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";
   return this.hc.delete(deleteUrl);
  }

  createQuestionData(n){
   return this.hc.post(this.quesPatternUrl,n,{});
   }

   editQuestionData(editItem){
    var editUrl="https://api.mlab.com/api/1/databases/pratical_test/collections/question_pattern/"+editItem._id.$oid+"?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";
    return this.hc.get(editUrl);
   }

   updateQuestionData(innerid,n){
    return this.hc.put(
      "https://api.mlab.com/api/1/databases/pratical_test/collections/question_pattern?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo"
      +"&q={_id:{$oid:'"+innerid+"'}}",n);
    }

 

}
