import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
programs;
currentProgram;
programListTable = true;
addProgramForm = false;
editProgramForm=false;
public programName="";
public programDuration="";
public programFees="";
public programDescription="";
id:string;
Apikey="?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";

  constructor(private http:HttpClient, private router: Router) { }
  addProgram(){
    this.addProgramForm = true;
      this.programListTable = false;
      this.editProgramForm=false;
  }
  addProgramDetails(){
    this.addProgramForm = true;
    this.editProgramForm=false;
      var programDetails = {
        programName: this.programName,
        programDuration: this.programDuration,
        programFees: this.programFees,
        programDescription: this.programDescription,
        }
      this.http.post("https://api.mlab.com/api/1/databases/enquiry_info/collections/programs?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo",programDetails)
      .subscribe((d)=>{console.log(d)
      alert("Submitted the data");
      });
      this.addProgramForm=false;
      this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/programs?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
      .subscribe((d)=>{
        this.programs=d;
      });
      this.programListTable=true;
  }
  goBack(){
    this.programListTable=true;
    this.addProgramForm=false;
  }
  deleteProgram(x){
    console.log(x._id.$oid);
    var url = "https://api.mlab.com/api/1/databases/enquiry_info/collections/programs/"+x._id.$oid+"?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo"
    this.http.delete(url).subscribe((d)=>{
      console.log(d)});
    
    this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/programs?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
    .subscribe((d)=>{
      this.programs=d;
    });
    this.router.navigateByUrl('/programs').then((d)=>{
      console.log(d);
    })
  }
  editProgram(program){
    var url = "https://api.mlab.com/api/1/databases/enquiry_info/collections/programs/"+program._id.$oid+"?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo"
   
    this.programListTable=false;
    this.http.get(url)
    .subscribe((d)=>{
      this.programs=d;
      this.currentProgram=d;
      this.editProgramForm = true;
    }); 
  }
  updateProgramDetails(id){
    console.log(id);
    this.http.put("https://api.mlab.com/api/1/databases/enquiry_info/collections/programs/"+this.Apikey+
    "&q={_id:{$oid:'"+id+"'}}",
    {programName:this.currentProgram.programName,programDuration:this.currentProgram.programDuration,programFees:this.currentProgram.programFees,programDescription:this.currentProgram.programDescription})
    .subscribe((d)=>{
      console.log(d);
      alert("Updated the Program");
    }); 
    this.router.navigateByUrl('/').then((d)=>{
      console.log(d);
    })
  
  }
  ngOnInit() {
    return this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/programs?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
      .subscribe((d)=>{
        this.programs=d;
    });
  }

}
