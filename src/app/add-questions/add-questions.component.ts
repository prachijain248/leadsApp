import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  constructor(private router:Router,private acRoute: ActivatedRoute,private appService:AppServiceService) {
    this.acRoute.parent.params.subscribe(params => console.log(params));
  }

  public ques = "";
  public opt1 = "";
  public opt2 = "";
  public opt3 = "";
  public opt4 = "";

  ngOnInit() {
  
  }
  createquestion(){
    this.appService.createQuestionData(
      {"mcqquestion":this.ques,"option1":this.opt1,"option2":this.opt2,
      "option3":this.opt3,"option4":this.opt4})
    .subscribe((res)=>{console.log(res);});
    console.log('Item create');
    alert('Item Created');
      //this.router.navigate(["/practicalTest"])
   /* this.ques="";
    this.opt1="";
    this.opt2="";
    this.opt3="";
    this.opt4="";*/
    this.testform.reset();
  }
  testform = new FormGroup({
    qu: new FormControl("",[Validators.required,Validators.minLength(1)]),
    op1: new FormControl("",[Validators.required,Validators.minLength(1)]),
    op2: new FormControl("",[Validators.required,Validators.minLength(1)]),
    op3: new FormControl("",[Validators.required,Validators.minLength(1)]),
    op4: new FormControl("",[Validators.required,Validators.minLength(1)])
  });

}
