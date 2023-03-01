import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { images, IImages } from '../images';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  images: Array<IImages> = images;
  image: IImages = {} as IImages;
  id: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.image = images[this.id];
    });
  }
}
