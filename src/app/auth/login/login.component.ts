import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  focus6;
  focus7;
  focus8;

  constructor(public router: Router, public roleService: AuthService) { }

  ngOnInit() {
  }

  doLogin(){
    if (this.username=='admin'){
      this.roleService.userRole = 1
      this.router.navigateByUrl('/admin/dashboard')
    }
    else if (this.username=='user'){
      this.roleService.userRole = 2
      this.router.navigateByUrl('/user/aduan')
    }
  }

}
