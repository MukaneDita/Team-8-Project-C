import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // product: IProducts = {} as IProducts;
  // id: number = 0;

  constructor(private rout: ActivatedRoute) { }

  ngOnInit(): void {
      //   this.route.params.subscribe((params: Params) => {
  //     this.id = +params['id'];
  //     this.shop = shop[this.id];
  //   });
  }
}
