import { Component , Input} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { DateTime } from 'luxon';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent {
  selectedState: any = null;
  productList!:IProduct
  @Input() imageUrl!: string;
  productForm = this.formBuilder.group({
    name: ["",[Validators.required]],
    quantity:[0,[Validators.required]],
    importPrice:  [0,[Validators.required]],
    price:[0,[Validators.required]],
    description:["",[Validators.required]],
    image:["",[Validators.required]],
    ProductCateID:[0,[Validators.required]],
    code:["",[Validators.required]]
  })
  // time
  currentDateTime: string;
  // category
 

  constructor(
    private productService: ProductService,
    private CategoryService:CategoryService,
    private formBuilder : FormBuilder,
    private route: ActivatedRoute,
    private redirect: Router
  ){
    const vietnamTimeZone = 'Asia/Ho_Chi_Minh';
    const now = DateTime.now().setZone(vietnamTimeZone);
    this.currentDateTime = now.toFormat('yyyy-MM-dd HH:mm:ss');
    console.log(this.currentDateTime);
    this.route.paramMap.subscribe( param =>{
      const id = Number(param.get('id'))
      console.log(id);
      
      this.productService.getProductById(id).subscribe( product =>{
        console.log(product);
        
        this.productList = product
        this.productForm.patchValue({
          code:this.productList.code,        
          name: this.productList.name,
          quantity:this.productList.quantity,
          importPrice:this.productList.importPrice,
          price:this.productList.price,
          description:this.productList.description,
          image:this.productList.image,
          // category:this.dropdownItems,
          
        })
      })
    })
    
    this.CategoryService.getAllCategory().subscribe(data => {
      this.ProductCateID = data
    })
  }

  ProductCateID!:any
 

  // hiện ảnh
  previewImageUrl!: string;
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
 


  // add
  onHandleSubmit(){
    if(this.productForm.valid){
      const product: IProduct ={    
        id: this.productList.id,
        code:this.productForm.value.code || "",
        name:this.productForm.value.name || "",
        description:this.productForm.value.description || "",
        importPrice:this.productForm.value.importPrice || 0,
        price:this.productForm.value.price || 0,              
        quantity:this.productForm.value.quantity || 0,
        status:1,
        ProductCateID:this.productForm.value.ProductCateID || 0,
        image:this.productForm.value.image || "",
        date:this.productList.date || "",
        updateDay: this.currentDateTime,

      }
      this.productService.editProduct(product).subscribe(product => {
        console.log(product);
      alert("Thêm thành công")
        this.redirect.navigate(["/admin/product"])
       
      })
    }
  }
}
