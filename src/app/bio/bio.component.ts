import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {

  info = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email:new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit(){
    // to take the values from the form you can select the property that have the formGroup and then just add .value
      var a = this.info.value;
      console.log(a)
    }
  

}
