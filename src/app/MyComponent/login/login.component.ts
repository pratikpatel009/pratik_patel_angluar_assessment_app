
import { FormsModule } from '@angular/forms';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  error = 'user name and password wrong!!'
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
      Swal.fire("Good job!", "You are login!", "success");
      this.router.navigateByUrl('home');
    } else {
      console.log("somthing wrong");
      Swal.fire("wrong","check username and password","error")
      this.router.navigateByUrl('login');

    }
  }
}

