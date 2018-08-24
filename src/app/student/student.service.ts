import { Injectable, Inject } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpParams } from '@angular/common/http';

const apiUrl = environment.baseApiUrl + '/students';
//const apiUrl = '/students';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(term?: any): Observable<any> {
    const params: HttpParams = new HttpParams();
    Object.keys(term).map(key => {
      if (term[key]) { params.set(key, term[key]); }
    });
    return this.http.get(`${apiUrl}`, { params });
  }

  getStudent(id: string): Observable<any> {
    return this.http.get(`${apiUrl}/${id}`);
  }

  saveStudent(data: Student) {
    console.log('saving student:' + data);
    return this.http.post(`${apiUrl}`, data);
  }

  updateStudent(id: string, data: Student) {
    console.log('updating student:' + data);
    return this.http.put(`${apiUrl}/${id}`, data);
  }

  deleteStudent(id: string) {
    console.log('delete student by id:' + id);
    return this.http.delete(`${apiUrl}/${id}`);
  }

  saveComment(id: string, data: Comment) {
    return this.http.post(`${apiUrl}/${id}/comments`, data);
  }

  getCommentsOfPost(id: string): Observable<any> {
    return this.http.get(`${apiUrl}/${id}/comments`);
  }

  validateStatus(id: string, data: string) {
    return this.http.post(`${apiUrl}/${id}/status`, data);
  }

}
