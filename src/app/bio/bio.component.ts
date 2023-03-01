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
    email: new FormControl(''),
    message: new FormControl(''),
    subject: new FormControl('')
  });

  onSubmit() {
    var a = this.info.value;
    console.log(a)
    window.alert(`Thank you for contacting us about your ${a.subject}, ${a.firstName} ${a.lastName}! We will respond as soon as possible on your email: ${a.email} Have a nice day!`);

  }


}
