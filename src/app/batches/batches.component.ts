import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {
courses;
public newBatchName = "";
public newBatchId="";
public courseName = "";

public myStartDateValue: Date;
public myEndDateValue: Date;
public myStarttime:Date;
public myEndtime:Date;
constructor(private http:HttpClient, private router: Router) { }

createNewBatch(){
  var addNewBatchData = {
    newBatchId: this.newBatchId,
    newBatchName: this.newBatchName,
    courseName:this.courseName,
    myStartDateValue: this.myStartDateValue,
    myEndDateValue:this.myEndDateValue,
    myStarttime:this.myStarttime,
    myEndtime:this.myEndtime,
  };
  this.http.post("https://api.mlab.com/api/1/databases/enquiry_info/collections/addnewbatches?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo",addNewBatchData)
    .subscribe((d)=>{console.log(d)
   alert("Submitted the data");
    });
}
addStudentsToNewBatch(){
  this.router.navigateByUrl('/addstudenttonewbatch').then((d)=>{
    console.log(d);
  })
}
  ngOnInit() {
    this.myStartDateValue = new Date();
    this.myEndDateValue = new Date();
    this.myStarttime= new Date();
    this.myEndtime = new Date();

    this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/courses?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
    .subscribe((d)=>{
      this.courses=d;
      console.log("this is data"+d);
  });
  }
  onDateChange(newStartDate: Date) {
    console.log(newStartDate);
  }
  onEndDateChange(newEndDate: Date) {
    console.log(newEndDate);
  }
}
