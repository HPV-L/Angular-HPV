import { Component } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { SizeService } from 'src/app/services/size.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-size-add',
  templateUrl: './size-add.component.html',
  styleUrls: ['./size-add.component.scss']
})

export class SizeAddComponent {
  constructor (
    private formBuilder: FormBuilder,
    private sizeService: SizeService,
    private router: Router
  ){

  }
 SizeForm = this.formBuilder.group({
    name: ["",[Validators.required]],
  })
  onHandleSubmit(){
    if(this.SizeForm.valid){
      const size = {
        name: this.SizeForm.value.name || ""
      }
      this.sizeService.addSize(size).subscribe(data =>{
        console.log(data);
        alert("them size thanh cong")    
        this.router.navigate(['/admin/size']);   
      })
    }
  }
}
