import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './MyComponent/blog/blog.component';
import { TestimonialComponent } from './MyComponent/testimonial/testimonial.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { BennarComponent } from './MyComponent/bennar/bennar.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { FeaturesComponent } from './MyComponent/features/features.component';
import { ContactComponent } from './MyComponent/contact/contact.component';
import { PageNotFoundComponent } from './MyComponent/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    TestimonialComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    routingComponents,
    HeaderComponent,
    BennarComponent,
    AboutComponent,
    FeaturesComponent,
    ContactComponent,
    PageNotFoundComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
