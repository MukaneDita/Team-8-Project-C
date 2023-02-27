import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { LandingComponent } from './landing/landing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [{
  path: "", component: LandingComponent
}, {
  path: "bio", component: BioComponent
}, {
  path: "portfolio", component: PortfolioComponent
}, {
  path: "testimonials", component: TestimonialsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
