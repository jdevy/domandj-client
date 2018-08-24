import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, OnDestroy {

  @Input() student: Student = { firstName: '', lastName: '', avatar: '' };
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  sub: Subscription;
  avatars = new Array(16).fill(0).map((_, i) => `svg-${i + 1}`);
//  selectedAvatar = this.avatars[0];

  constructor(private studentService: StudentService) { }

  submit() {
    const _body = { firstName: this.student.firstName, lastName: this.student.lastName, avatar: this.student.avatar };

    if (this.student.id) {
      this.studentService
        .updateStudent(this.student.id, _body)
        .subscribe((data) => {
          this.save.emit(true);
        },
        (error) => {
          this.save.emit(false);
        }
        );
    } else {
      this.studentService
        .saveStudent(_body)
        .subscribe((data) => {
          this.save.emit(true);
        },
        (error) => {
          this.save.emit(false);
        }
        );
    }

  }

  ngOnInit() {
    console.log('calling ngOnInit::StudentFormComponent...');
  }

  ngOnDestroy() {
    console.log('calling ngOnDestroy::StudentFormComponent...');
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
