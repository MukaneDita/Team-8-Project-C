import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { LandingComponent } from './landing/landing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ShopComponent } from './shop/shop.component';

import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [{
  path: "", component: LandingComponent
}, {
  path: "bio", component: BioComponent
}, {
  path: "portfolio", component: PortfolioComponent
}, {
  path: "testimonials", component: TestimonialsComponent
}, {
  path: "details", component: DetailsComponent
},{
  path: "shop", component: ShopComponent
},
{
  path: "cart", component: CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
