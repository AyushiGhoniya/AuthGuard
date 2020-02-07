import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanLoadService implements CanLoad {

  constructor(private router: Router) { }

  canLoad(): boolean {
    if(localStorage.getItem("token") == '') {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
