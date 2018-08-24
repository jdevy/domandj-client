import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoadGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) { }

  canLoad(route: Route): boolean {
    let url: string = route.path;
    console.log('Url:'+ url);
    this.authService.isAuthenticated().subscribe(auth => {
      if (!auth) {
        this.router.navigate(['/auth']);
        return false;
      }
    });
    return true;
  }

  // canLoad_backup(route: Route) {
  //   console.log('call canLoad guard.');
  //   this.authService.isAuthenticated().pipe(
  //     tap(auth => {
  //     if (!auth) {
  //       this.router.navigate(['/auth']);
  //       return false;
  //     }
  //   })
  // );
  //   return true;
  // }
}
