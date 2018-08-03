import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-test-category',
  templateUrl: './test-category.component.html',
  styleUrls: ['./test-category.component.css']
})
export class TestCategoryComponent implements OnInit {

  constructor(private appService:AppServiceService) { }

  ngOnInit() {
    this.mainCategory();
  }

  mainCategoryObjects;
  subCategoryObjects;
  
  mainCategory(){
    this.appService.mainCategoryData()
    .subscribe((res)=>{
      this.mainCategoryObjects = res;
      console.log(res)},
    )
  }

  clickMainCategory(y){
    alert("hi");
    this.appService.subCategoryData(y)
    .subscribe((res)=>{
      this.subCategoryObjects = res;
      console.log(res)},
    )
  }

}
