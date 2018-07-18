import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
leads;
 id:string;
displayTable = false;
currentLead;
editLeadForm = false;
Apikey="?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";

  constructor(private http:HttpClient,private router: Router) { }
  
showDetailsMethod(){
    return this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/leads?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
    .subscribe((d)=>{
      this.leads=d;
      this.displayTable=true;

      console.log("this is data"+d);
  });

}
deleteLead(x)
{
  console.log(x._id.$oid);
  var url = "https://api.mlab.com/api/1/databases/enquiry_info/collections/leads/"+x._id.$oid+"?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo"
  this.http.delete(url).subscribe((d)=>{
    console.log(d)});
  
  this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/leads?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
  .subscribe((d)=>{
    this.leads=d;
  });
}
editLead(lead){
  var url = "https://api.mlab.com/api/1/databases/enquiry_info/collections/leads/"+lead._id.$oid+"?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo"
   
  this.displayTable=false;
  this.http.get(url)
  .subscribe((d)=>{
    this.leads=d;
    this.currentLead=d;
    this.editLeadForm = true;
  }); 
}
updateLeadDetails(id){
  console.log(id);
  this.http.put("https://api.mlab.com/api/1/databases/enquiry_info/collections/leads/"+this.Apikey+
  "&q={_id:{$oid:'"+id+"'}}",
  {name:this.currentLead.name,phone:this.currentLead.phone,email:this.currentLead.email,leadGenerator:this.currentLead.leadGenerator,sourceDropdown:this.currentLead.sourceDropdown,courseDropdown:this.currentLead.courseDropdown,programDropdown:this.currentLead.programDropdown,remarksText:this.currentLead.remarksText,followupDate:this.currentLead.followupDate,followupInitiator:this.currentLead.followupInitiator,followupremarksText:this.currentLead.followupremarksText})
  .subscribe((d)=>{
    console.log(d);
    alert("Updated the Program");
  }); 
  this.router.navigateByUrl('/').then((d)=>{
    console.log(d);
  })

}
  ngOnInit() {
    this.showDetailsMethod();
  }


}
