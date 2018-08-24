import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from '../../student/student.model';
import { StudentService } from '../../student/student.service';


@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})

export class NewStudentComponent implements OnInit {
  student: Student = { firstName: '', lastName: '', avatar: '' };
  sub: Subscription;

  constructor( private router: Router) { }

  onStudentSaved(event) {
    console.log('student was saved::' + event);
    if (event) {
      this.router.navigate(['', 'student']);
    }
  }

  ngOnInit() {
    console.log('calling ngOnInit::NewStudentComponent...');
  }

  ngOnDestroy() {
    console.log('calling ngOnDestroy::NewStudentComponent...');
  }

  backToList() {
    this.router.navigate(['', 'student', 'list']);
  }

}
