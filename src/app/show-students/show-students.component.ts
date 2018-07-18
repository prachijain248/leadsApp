import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent implements OnInit {
students;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/batchstudents?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
    .subscribe((d)=>{
      this.students=d;
      console.log("this is data"+d);
  });
  }

}
