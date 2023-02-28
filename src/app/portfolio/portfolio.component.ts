import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { images } from '../images';
import { IImages } from '../IImages';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
images : Array <IImages> = images;

  constructor(private rout: ActivatedRoute) { }
  
}
