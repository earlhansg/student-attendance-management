import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Student } from '@app/dashboard/student/shared/models';
import { StudentService } from '@app/dashboard/student/shared/services/student/student.service';

@Injectable({providedIn: 'root'})
export class StudentStoreService {


  constructor(private studentService: StudentService) {
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

      const dbId = 100;
      const newStudent = {id: dbId, ...body};

      this.students = [
        ...this.students,
        newStudent
      ];

      try {
        const student = await this.studentService
          .createStudent(body)
          .toPromise();

        // we swap the local student record with the record from the server (id must be updated)
        const index = this.students.indexOf(this.students.find(data => data.id === dbId));
        this.students[index] = {
          ...student
        };
        this.students = [...this.students];
      } catch (e) {
        // is server sends back an error, we revert the changes
        console.error(e);
        this.removeStudent(dbId, false);
      }

    }

  }

  async removeStudent(id: any, serverRemove = true) {
    // optimistic update
    const student = this.students.find(data => data.id === id);
    this.students = this.students.filter(data => data.id !== id);

    if (serverRemove) {
      try {
        await this.studentService.removeStudent(id).toPromise();
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
