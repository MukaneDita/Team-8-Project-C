import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { images, titles } from '../images';
import { IImages } from '../IImages';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
images : Array<any> = images;
titles : Array<any> = titles;

  constructor(private rout: ActivatedRoute) { }
  
}
