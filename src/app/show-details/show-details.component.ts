import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
leads;
displayTable = false;
  constructor(private http:HttpClient) { }
  
showDetailsMethod(){
  this.displayTable=true;
    return this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/leads?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
    .subscribe((d)=>{
      this.leads=d;
      console.log("this is data"+d);
  });
 
}
  ngOnInit() {
    this.showDetailsMethod();
  }


}
