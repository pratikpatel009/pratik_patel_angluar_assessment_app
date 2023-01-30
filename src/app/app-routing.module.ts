import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './MyComponent/blog/blog.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { PageNotFoundComponent } from './MyComponent/page-not-found/page-not-found.component';
import { TestimonialComponent } from './MyComponent/testimonial/testimonial.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login',pathMatch:"full"  },
  {path:'blog', component: BlogComponent},
  {path: 'footer', component: FooterComponent},
  {path : 'home',component:HomeComponent},
  {path : 'testimonial', component:TestimonialComponent},
  {path : '**',component:PageNotFoundComponent}
 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,FooterComponent,LoginComponent]
