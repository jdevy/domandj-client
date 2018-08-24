import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { AlertService } from '../../alert/alert.service';
import { Router } from '@angular/router';
import { User } from '../../core/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
//  user: User;
  @Input() user: User = { username: '', password: '', email: '' };
  @Output() save: EventEmitter<any> = new EventEmitter<any>();

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  username = '';
  password = '';
  email = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
    console.log('calling ngOnInit...');
    // this.auth.isAuthenticated().subscribe(auth => {
    //   if (auth) {
    //     console.log("***** already authenticated !! ");
    //     this.auth.signout();
    //   }
    // });
  }

  submit() {
    const _body = { username: this.user.username, password: this.user.password, email: this.user.email };
    this.auth.saveUser(_body)
      .subscribe((data) => {
//        this.save.emit(true);
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/auth/signin']);
      },
      (error) => {
        this.alertService.error(error);
        this.save.emit(false);
      }
    );
  }

}



