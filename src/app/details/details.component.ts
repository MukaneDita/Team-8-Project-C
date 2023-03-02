import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { images } from '../images';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  images: Array<any> = images;
  image: Array<string> = [];
  id: number = 0;

//sweet alert functions for pop-up
  popUp(param: string){
    Swal.fire({
      imageUrl: `${param}`,
      imageHeight: 600,
      imageWidth: "90%",
      width: "40%",
      imageAlt: 'A tall image'
    })
  }
  popUp2(param: string){
    Swal.fire({
      imageUrl: `${param}`,
        imageWidth: "90%",
      imageAlt: 'A tall image',
      width: "85%",
    })
  }
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.image = images[this.id];
    });
  }
}
