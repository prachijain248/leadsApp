import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {

  public username = "";
  public phno = "";
  public email = "";
  public leadGenerator = "";
  public sourceDropdown = "";
  public courseDropdown = "";
  public programDropdown = "";
  public remarksText = "";
  public followupDate = "";
  public followupInitiator = "";
  public followupremarksText = "";
  courses;
  programs;
  constructor(private http:HttpClient) {}
   getDetailsMethod(){
    var formData={
      name: this.username,
      phone: this.phno,
      email: this.email,
      leadGenerator: this.leadGenerator,
      sourceDropdown:this.sourceDropdown,
      courseDropdown: this.courseDropdown,
      programDropdown: this.programDropdown,
      remarksText: this.remarksText,
      followupDate:this.followupDate,
      followupInitiator:this.followupInitiator,
      followupremarksText: this.followupremarksText,
    };
    this.http.post("https://api.mlab.com/api/1/databases/enquiry_info/collections/leads?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo",formData)
    .subscribe((d)=>{console.log(d)
   alert("Submitted the data");
    });
  }


  ngOnInit() {

  this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/courses?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
    .subscribe((d)=>{
      this.courses=d;
      console.log("this is data"+d);
  });
  
  this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/programs?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
  .subscribe((d)=>{
    this.programs=d;
    console.log("this is data"+d);
});
}

}