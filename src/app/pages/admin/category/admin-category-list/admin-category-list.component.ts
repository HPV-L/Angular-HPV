import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.scss'],
  providers: [MessageService]
})
export class AdminCategoryListComponent implements OnInit {

    productListCateId: IProduct[] = [];

    categoryDialog: boolean = false;
  
    deleteCategoryDialog: boolean = false;
  
    deleteCategorysDialog: boolean = false;
  
    categories: ICategory[] = [];
  
    category: | ICategory = {};
  
  
    selectedCategories: ICategory[] = [];
  
    submitted: boolean = false;
  
    cols: any[] = [];
  
    rowsPerPageOptions = [5, 10, 20];
  
    constructor(private categoryService: CategoryService, private messageService: MessageService) { }
  
    ngOnInit() {
  
        this.categoryService.getAllCategory().subscribe(data => this.categories = data);
      
    }
  
    openNew() {
        this.category = {};
        this.submitted = false;
        this.categoryDialog = true;
    }
  
    deleteSelectedProducts() {
        this.deleteCategorysDialog = true;
       console.log(this.category);
    }
  
  
    deleteProduct(ids :number,category: ICategory  ) {
        this.deleteCategoryDialog = true;
       console.log(ids);
       
       
        if (this.categories.length > 0) {         
            this.categoryService.getProductsByCategoryId(ids).subscribe(products => {
               this.productListCateId = products;
            //    console.log(products);
               
               this.productListCateId.forEach(product => {
                 this.categoryService.deleteProduct(product.id).subscribe();
               });       
             });
        }
        this.categoryService.deleteCategory(category.id).subscribe(() =>{
          this.category = { ...category };
      })
        
    }

  
    confirmDeleteSelected() {
        this.deleteCategorysDialog = false;
        this.categories = this.categories.filter(val => !this.selectedCategories.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedCategories = [];
    }
  
    confirmDelete() {
        this.deleteCategoryDialog = false;
        this.categories = this.categories.filter(val => val.id !== this.category.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        this.category = {};
    }
  
    hideDialog() {
        this.categoryDialog = false;
        this.submitted = false;
    }
  
    findIndexById(id: number): number {
  
        let index = -1;
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
  
    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
  
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
  }
