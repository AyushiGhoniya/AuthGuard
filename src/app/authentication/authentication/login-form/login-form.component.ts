import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  private localStorage = window.localStorage;
  public userName: string = localStorage.getItem('userName');
  public userToken: any = this.localStorage.getItem('token');

  constructor(private router: Router, private authenticatedService: AuthenticationService) { }

  dataFetched: boolean = false;
  password: string = "";
  email: string = ""

  ngOnInit() {
    setTimeout(() => {
      this.dataFetched = true;
      }, 2000);
  }

  getLoginDetails(formData: NgForm) {
    // this.authenticatedService.userLoginDetails.map(item => {
    //   if (item.email === data.value.email && item.password === data.value.password) {
    //     this.localStorage.setItem('token', this.uuidv4());
    //     this.router.navigate(['home']);
    //   }
    // })

    this.authenticatedService.getUserFromEmailAndPassword(formData.value.email, formData.value.password).subscribe(data => {
      if (data.length != 0) {
        this.localStorage.setItem('token', this.uuidv4());
        this.router.navigate(['home']);
      } else {
        alert('Invalid email or password..!!')
      }
    })
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  navigateToSignUp() {
    this.router.navigateByUrl('auth/signup')
  }

}
