import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IUser } from 'src/app/modals/user.modal';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  
  confirmPassword: string = "";
  password: string = "";
  email: string = "";
  id: number;

  user: IUser;
  users: IUser[];

  ngOnInit() {
    // this.authenticationService.getUserDetails().subscribe(data => {
    //   this.id = data.length + 1;
    // })
    // console.log(this.users.length)
  }

  navigateToLogin() {
    this.router.navigateByUrl('auth/login')
  }

  getSignUpDetails(formData: NgForm) {
    // this.authenticationService.userLoginDetails.push(data.value);

    this.user = {
      id: this.id,
      email: formData.value.email,
      password: formData.value.password
    }

    console.log(this.user)
    this.authenticationService.addUser(this.user).subscribe(data => {
      this.router.navigate(['/auth/login'])
    })
  }

}
