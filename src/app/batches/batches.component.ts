import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {
courses;
createNewBatchForm=false;
  constructor(private http:HttpClient) { }
createNewBatch(){
this.createNewBatchForm=true;

}
  ngOnInit() {
    this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/courses?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
    .subscribe((d)=>{
      this.courses=d;
      console.log("this is data"+d);
  });
  }

}
