import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadGuard } from './core/load-guard';
import { AuthComponent } from './auth/auth.component';

// import { AppRoutingComponent } from './name.component';

const routes: Routes = [
//  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'post', loadChildren: './post/post.module#PostModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'student', loadChildren: './student/student.module#StudentModule', canLoad: [LoadGuard] },
  { path: '**', redirectTo: '' }
//  { path: '**', loadChildren: './auth/auth.module#AuthModule'}
//  { path: '**', component:PageNotFoundComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
