import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss'],
  providers: [MessageService]
})
export class AdminProductListComponent implements OnInit {

  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  products: IProduct[] = [];

  product: | IProduct = {};


  selectedProducts: IProduct[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit() {

      this.productService.getAllProducts().subscribe(data => this.products = data);
      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'price', header: 'Price' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' },
          { field: 'date', header: 'Date' }
      ];

    
  }

  openNew() {
      this.product = {};
      this.submitted = false;
      this.productDialog = true;
  }

  deleteSelectedProducts() {
      this.deleteProductsDialog = true;
     console.log(this.product);
     
    
  }


  deleteProduct(product: IProduct) {
      this.deleteProductDialog = true;
      this.productService.deleteProduct(product.id).subscribe(() =>{
        // this.products = this.products.filter(item => item.id !== product.id)
        this.product = { ...product };
    })
      
  }

  confirmDeleteSelected() {
      this.deleteProductsDialog = false;
      this.products = this.products.filter(val => !this.selectedProducts.includes(val));
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      this.selectedProducts = [];
  }

  confirmDelete() {
      this.deleteProductDialog = false;
      this.products = this.products.filter(val => val.id !== this.product.id);
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      this.product = {};
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }



  findIndexById(id: number): number {

      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === id) {
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
