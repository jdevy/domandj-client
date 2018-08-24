import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit, OnDestroy {
  students: Student[];
  q = null;
  sub: Subscription;

  constructor(private router: Router, private studentService: StudentService) { }

  search() {
    this.sub = this.studentService.getStudents({ q: this.q })
    .subscribe(
      data => this.students = data,
      err => console.log(err)
    );
  }

  addStudent() {
    this.router.navigate(['', 'student', 'new']);
  }

  deleteStudent(id: string) {
    console.log('calling deleteStudent id = ' + id);
    this.studentService.deleteStudent(id)
      .subscribe(successCode => {
        this.search();
      });
  }

  ngOnInit() {
    console.log('calling ngOnInit::StudentListComponent');
    this.search();
  }

  ngOnDestroy() {
    console.log('calling ngOnDestroy::StudentListComponent');
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
