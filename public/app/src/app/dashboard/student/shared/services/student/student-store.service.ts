import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// Service
import { StudentService } from '@app/dashboard/student/shared/services/student/student.service';
// Model
import { Student } from '@app/dashboard/student/shared/models';
// RXJS
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StudentStoreService {


  constructor(
    private studentService: StudentService,
    private router: Router) {
    this.fetchAll();
  }

  private readonly STUDENTS = new BehaviorSubject<Student[]>([]);

  // Expose the observable$ part of the students subject (read only stream)
  readonly students$ = this.STUDENTS.asObservable();

  // the getter will return the last value emitted in STUDENTS subject
  get students(): Student[] {
    return this.STUDENTS.getValue();
  }


  // assigning a value to this.students will push it onto the observable
  // and down to all of its subsribers (ex: this.students = [])
  set students(val: Student[]) {
    this.STUDENTS.next(val);
  }

  async addStudent(body: Student) {

    if (body) {

      // const dbId = 100;
      const newStudent = {...body};

      this.students = [
        ...this.students,
        newStudent
      ];

      try {
        const student = await this.studentService
          .createStudent(body)
          .toPromise();
        this.router.navigate(['dashboard']);
        // we swap the local student record with the record from the server (id must be updated)
        const index = this.students.indexOf(this.students.find(data => data.idNumber === body.idNumber));
        this.students[index] = {
          ...student
        };
        this.students = [...this.students];
      } catch (e) {
        // is server sends back an error, we revert the changes
        console.error(e);
        this.removeStudent(body.idNumber, false);
      }

    }

  }

  async updateStudent(body: Student) {
    const student = this.students.find(data => data.id === body.id);
    if (student) {
      const index = this.students.indexOf(student);

      this.students[index] = {
        ...student,
        ...body
      };

      this.students = [...this.students];

      try {
        await this.studentService
          .updateStudent(body.id, body)
          .toPromise();
        this.router.navigate(['dashboard']);
      } catch (e) {

        console.log(e);
        this.students[index] = {
          ...student
        };

      }
      // end of catch
    }
  }

  async removeStudent(idNumber: any, serverRemove = true) {
    // optimistic update
    const student = this.students.find(data => data.idNumber === idNumber);
    this.students = this.students.filter(data => data.idNumber !== idNumber);

    if (serverRemove) {
      try {
        await this.studentService.removeStudent(idNumber).toPromise();
      } catch (e) {
        console.error(e);
        this.students = [...this.students, student];
      }
    }

  }

  async fetchAll() {
    this.students = await this.studentService.getStudents().toPromise();
  }

}
