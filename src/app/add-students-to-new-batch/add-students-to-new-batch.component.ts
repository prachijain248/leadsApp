import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'add-students',
  templateUrl: './add-students-to-new-batch.component.html',
  styleUrls: ['./add-students-to-new-batch.component.css']
})
export class AddStudentsToNewBatchComponent implements OnInit {
leads;
displayTable = false;
public name ="";
public phone ="";
public email ="";
public course ="";
public program ="";
public remarksText ="";


@Input('parentData') public batchId;
  constructor(private http:HttpClient) { }
  addStudentToDb(x){
    console.log(x._id.$oid);
    console.log(this.batchId);
    var addStudent={
        batchId : this.batchId,
        name :x.name,
        phone : x.phone,
        email: x.email,
        course: x.courseDropdown,
        program: x.programDropdown,
        remarksText: x.remarksText,
    };
    this.http.post("https://api.mlab.com/api/1/databases/enquiry_info/collections/batchstudents?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo",addStudent)
    .subscribe((d)=>{console.log(d)
   alert("Submitted the data");
    });
  }
  ngOnInit() {
    return this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/leads?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
    .subscribe((d)=>{
      this.leads=d;
      this.displayTable=true;

      console.log("this is data"+d);
  });
  }

}
