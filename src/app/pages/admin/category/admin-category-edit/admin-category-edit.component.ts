import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { DateTime } from 'luxon';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.scss']
})
export class AdminCategoryEditComponent {
  selectedState: any = null;
  category!:ICategory
  @Input() imageUrl!: string;
  categoryForm = this.formBuilder.group({
    name: ["",[Validators.required]],
    
  })


  // time
  currentDateTime: string;
  
  constructor(
    private CategoryService:CategoryService,
    private formBuilder : FormBuilder,
    private redirect: Router,
    private route: ActivatedRoute,
  ){
    const vietnamTimeZone = 'Asia/Ho_Chi_Minh';
    const now = DateTime.now().setZone(vietnamTimeZone);
    this.currentDateTime = now.toFormat('yyyy-MM-dd HH:mm:ss');
    console.log(this.currentDateTime);
    
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.CategoryService.getCategory(id).subscribe(data => {
        this.category = data;
        this.categoryForm.patchValue({
          name: data.name,
        });
      });
    });
  }

  // add
  onHandleSubmit(){
    if(this.categoryForm.valid){
      const category: ICategory ={    
        _id:this.category._id,
        name:this. categoryForm.value.name || "",
        date:this.category.date,
        updateDay: this.currentDateTime,
      }
      this.CategoryService.editCategory(category).subscribe(data => {
       console.log(data);
        alert("Sửa thành công")
        this.redirect.navigate(["/admin/category"])      
      })
    }
  }
}
