import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit 
{

  addCourseForm = false;
  courseListTable = true;
  editForm= false;
  public courseName = "";
  public courseDuration = "";
  public courseFees="";
currentCourse;
  courses;
  id:string;
 Apikey="?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo";

 
    constructor(private http:HttpClient, private router: Router) { }

  ngOnInit()
   {
      return this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/courses?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
      .subscribe((d)=>{
        this.courses=d;
    });
  }
  goBack(){
    this.courseListTable=true;
    this.addCourseForm=false;
    this.editForm=false;
  }
  addCourse()
  {
    this.addCourseForm = true;
    this.courseListTable = false;
    this.editForm=false;
  }
  addCourseDetails()
  {
    this.addCourseForm = true;
    this.editForm=false;
    var courseDetails = {
      courseName: this.courseName,
      courseDuration: this.courseDuration,
      courseFees: this.courseFees
      }
    this.http.post("https://api.mlab.com/api/1/databases/enquiry_info/collections/courses?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo",courseDetails)
    .subscribe((d)=>{console.log(d)
    alert("Submitted the data");
    });
    this.addCourseForm=false;
    this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/courses?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
    .subscribe((d)=>{
      this.courses=d;
    });
    this.courseListTable=true;
  }

  deleteCourse(x){
    console.log(x._id.$oid);
    var url = "https://api.mlab.com/api/1/databases/enquiry_info/collections/courses/"+x._id.$oid+"?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo"
    this.http.delete(url).subscribe((d)=>{
      console.log(d)});
    
    this.http.get("https://api.mlab.com/api/1/databases/enquiry_info/collections/courses?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
    .subscribe((d)=>{
      this.courses=d;
    });
  }
  editCourse(course){
    console.log(course._id.$oid);
    var url = "https://api.mlab.com/api/1/databases/enquiry_info/collections/courses/"+course._id.$oid+"?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo"
   
    this.courseListTable=false;
    this.http.get(url)
    .subscribe((d)=>{
      this.courses=d;
      console.log(this.courses);
      this.currentCourse=d;
      console.log(this.currentCourse);
      this.editForm = true;
    });  
  }
  
  updateCourseDetails(id){
    console.log(id);
    this.http.put("https://api.mlab.com/api/1/databases/enquiry_info/collections/courses/"+this.Apikey+
    "&q={_id:{$oid:'"+id+"'}}",
    {courseName:this.currentCourse.courseName,courseDuration:this.currentCourse.courseDuration,courseFees:this.currentCourse.courseFees})
    .subscribe((d)=>{
      console.log(d);
      alert("Updated the Course");
    }); 
    this.router.navigateByUrl('/').then((d)=>{
      console.log(d);
    })
  
  }
  }
  
