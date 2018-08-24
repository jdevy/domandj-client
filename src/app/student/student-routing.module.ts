import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth-guard';
import { StudentListComponent } from './student-list/student-list.component';
import { NewStudentComponent } from './new-student/new-student.component';
//import { PostDetailsResolve } from './shared/student-details-resolve';

const routes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component: StudentListComponent, canActivate: [AuthGuard] },
  { path: 'new', component: NewStudentComponent, canActivate: [AuthGuard] }
//  { path: 'view/:id', component: StudentDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
