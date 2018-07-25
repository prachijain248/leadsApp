import { Component, OnInit } from '@angular/core'; 
//import {PracticalquestionsService} from '../practicalquestions.service';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practical-test',
  templateUrl: './practical-test.component.html',
  styleUrls: ['./practical-test.component.css']
})
export class PracticalTestComponent implements OnInit {

  constructor(public  hc:HttpClient,private router: Router,) {   }

  divCategory = false;
  divQuestionlist = true;
  divAddquestionList = false; 
  divEditselectedquestions = false;

  errorreceive;
  Apikey="?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";

  ques;
  opt1;
  opt2;
  opt3;
  opt4;

  currentQuestion;
  questions;
  questionsCategory;

  ngOnInit() {
    //this.getQuesCategory();
    this.getquestion();
  }

  configUrl="https://api.mlab.com/api/1/databases/pratical_test/collections/question_pattern?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";

  test(){
  //this.divCategory =false;
  this.divQuestionlist = true;
  this.divAddquestionList = false; 
  this.divEditselectedquestions = false;
  }

  addquestions(){
  //this.divCategory = false;
  this.divQuestionlist = false;
  this.divAddquestionList = true;
  this.divEditselectedquestions = false;
  }

  showquestionlist(){
    //this.divCategory = false;
    this.divAddquestionList = false; 
    this.divQuestionlist = true;
  }

 
//////////////////////////
  getquestion(){
    this.hc.get(this.configUrl)
    .subscribe(
      (res)=>{this.questions = res},//console.log(res)
    //  (error)=>{this.errorreceive = error}
    )
  }
  
  createquestion(){
    this.hc.post(this.configUrl,{mcqquestion:this.ques,option1:this.opt1,option2:this.opt2,option3:this.opt3,option4:this.opt4})
    .subscribe((res)=>{console.log(res)});
    console.log('Item create');
    alert('Item Created');
    this.getquestion();

  }


  deletequestions(x){  
   var deleteUrl="https://api.mlab.com/api/1/databases/pratical_test/collections/question_pattern/"+x._id.$oid+"?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";
    console.log(x._id.$oid);
    this.hc.delete(deleteUrl)
    .subscribe((res)=>{console.log(res);
    });
    alert('Are you sure want to Delete item')
    this.getquestion();
  }

  editquestions(x){
    this.divQuestionlist = false;
    this.divAddquestionList = false; 
    //console.log(x._id.$oid);
    var editurl = "https://api.mlab.com/api/1/databases/pratical_test/collections/question_pattern/"+x._id.$oid+"?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo"
    this.hc.get(editurl)
    .subscribe((res)=>{
     // this.questions = res;
      //console.log(this.questions);
      
      this.currentQuestion=res;
      console.log(this.currentQuestion);
      });
      this.divEditselectedquestions = true;
  }

  updatequestions(innerid){
    this.divQuestionlist = false;
    this.divAddquestionList = false; 
    this.hc.put(
    "https://api.mlab.com/api/1/databases/pratical_test/collections/question_pattern?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo"
    +"&q={_id:{$oid:'"+innerid+"'}}",
    {mcqquestion:this.currentQuestion.mcqquestion,option1:this.currentQuestion.option1,option2:this.currentQuestion.option2,option3:this.currentQuestion.option3,option4:this.currentQuestion.option4}
    )
    //"_id": { "$oid": "5b501af6fb6fc069480f1aab" }
    .subscribe((res)=>{
      this.currentQuestion=res;
      console.log(this.currentQuestion);
    });
    
    alert("Question Updated");
    this.getquestion();
    // this.router.navigateByUrl('/').then((d)=>{
    //   console.log(d);
    // })
  }
/////////////////////////////////

// _qCategory_url ="https://api.mlab.com/api/1/databases/pratical_test/collections/category?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";

//   getQuesCategory(){
//     this.hc.get(this._qCategory_url)
//     .subscribe(
//       (res)=>{
//       this.questionsCategory = res
//       console.log(res)},
//     )
//   }

}
