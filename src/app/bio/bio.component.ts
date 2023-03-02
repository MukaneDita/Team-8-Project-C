import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {

  //form
  newInfo: any = "";
  info = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    subject: new FormControl('')
  });

  onSubmit() {
    this.newInfo = this.info.value;
    console.log(this.newInfo);
    //  window.alert(`Thank you for contacting us about your ${this.newInfo.subject}, ${this.newInfo.firstName} ${this.newInfo.lastName}! We will respond as soon as possible on your email: ${this.newInfo.email} Have a nice day!`);

  }


}
