
import { FormsModule } from '@angular/forms';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  username!:string;
  password!:string;
  users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];
  errorMessage = '';
  form!: { value: { username: any; password: any; }; };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){

    if (this.username == 'admin' && this.password == 'admin' ) {
      console.log("correct");
      this.router.navigateByUrl('home');
    } else {
      console.log("somthing wrong");
      this.router.navigateByUrl('login');
    }
  }
}

