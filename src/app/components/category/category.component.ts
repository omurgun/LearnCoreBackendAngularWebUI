import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories :Category[] = [];
  currentCategory : Category = {id:0,name:"",route:"users"};

  constructor() { }

  ngOnInit(): void {

    this.getCategories()
  }

  getCategories(){
   
    let category1 : Category = { id : 1, name : "Kullanıcılar", route : "users" }
    let category2 : Category = { id : 2, name : "Arabalar" , route : "cars" }  

    this.categories = [category1,category2]


  }

  setCurrentCategory(category:Category){
     this.currentCategory = category;
  }

  getCurrentCategory(category:Category){
    if(category == this.currentCategory)
    {
      return "list-group-item active"
    }
    else
    {
      return "list-group-item"
    }
  }

}
