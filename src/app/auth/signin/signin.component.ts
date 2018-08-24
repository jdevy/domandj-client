import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { AlertService } from '../../alert/alert.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

//  private username = '';
//  private password = '';
  username = '';
  password = '';
  errorMessage = '';

  sub: Subscription = null;

  constructor(private auth: AuthService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    // this.auth.isAuthenticated().subscribe(auth => {
    //   if (auth) {
    //     console.log("***** already authenticated !! ");
    //    // this.auth.signout();
    //   }
    // });
    console.log('Login : calling ngOnInit...');
  }

  submit() {
    console.log('calling submit...');

    this.auth.attempAuth({ username: this.username, password: this.password })
      .subscribe(
        (data) => {
          //console.log(data);
          console.log("------- attempAuth " + this.username);
          this.router.navigate(['/home']);
        },
        (err) => {
          // console.log(err);
          this.alertService.error('login failed', false);
         // this.errorMessage = 'login failed';
          return;
        }
      );
    }

}
