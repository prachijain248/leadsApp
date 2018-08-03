import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';


@Component({
  selector: 'app-show-questions',
  templateUrl: './show-questions.component.html',
  styleUrls: ['./show-questions.component.css']
})
export class ShowQuestionsComponent implements OnInit {

  questions;
  currentQuestion;

  divQuestionlist = true;
  divEditselectedquestions = false;

  errorreceive;
  constructor(private acRoute: ActivatedRoute, private appService:AppServiceService){
    this.acRoute.parent.params.subscribe(params => console.log(params));
  }

  ngOnInit() {
    this.getquestion();
  }

  getquestion(){
    this.appService.fetchQuestionData()
    .subscribe( (res) => {this.questions = res},(error)=>{this.errorreceive = error})
  }

  deletequestions(del){  
    this.appService.delQuestionData(del)
    .subscribe((res)=>{
      console.log(res);
      this.getquestion();
    });
   
    alert('Are you sure want to Delete item');
  }

  
  editquestions(item){
    this.divQuestionlist = false;
    this.divEditselectedquestions = true;
    this.appService.editQuestionData(item)
    .subscribe((res)=>{
      this.currentQuestion=res;
      console.log(this.currentQuestion);
      });
  }

  updateQuestion(id){
    this.appService.updateQuestionData(id,{mcqquestion:this.currentQuestion.mcqquestion,option1:this.currentQuestion.option1,option2:this.currentQuestion.option2,option3:this.currentQuestion.option3,option4:this.currentQuestion.option4})
    .subscribe((res)=>{this.currentQuestion=res;
      this.getquestion();
      console.log(this.currentQuestion);
    });

    
    alert("Question Updated");
    this.divQuestionlist = true;
    this.divEditselectedquestions = false ;
  }

}
