import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentService} from './student.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentListComponent,
    StudentFormComponent,
    NewStudentComponent,
    EditStudentComponent,
    StudentDetailsComponent
  ],
  exports: [
    StudentListComponent,
    StudentFormComponent,
    NewStudentComponent,
    EditStudentComponent,
    StudentDetailsComponent
  ],
  providers: [
    StudentService
  ]
})
export class StudentModule { }
