import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// Service
import { AttendanceService } from '@shared/services/attendance/attendance.service';
// Model
import { ClassAttendance } from '@shared/models';
// RXJS
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AttendanceStoreService {


  constructor(
    private attendanceService: AttendanceService,
    private router: Router) {
    this.fetchAll();
  }

  private readonly ATTENDANCE = new BehaviorSubject<ClassAttendance[]>([]);

  // Expose the observable$ part of the attendance subject (read only stream)
  readonly attendance$ = this.ATTENDANCE.asObservable();

  // the getter will return the last value emitted in ATTENDANCE subject
  get attendance(): ClassAttendance[] {
    return this.ATTENDANCE.getValue();
  }


  // assigning a value to this.attendance will push it onto the observable
  // and down to all of its subsribers (ex: this.attendance = [])
  set attendance(val: ClassAttendance[]) {
    this.ATTENDANCE.next(val);
  }

  async addAttendance(body: ClassAttendance) {

    if (body) {

      const newAttendance = {...body};

      this.attendance = [
        ...this.attendance,
        newAttendance
      ];

      try {
        const attendance = await this.attendanceService
          .createAttendance(body)
          .toPromise();
        this.router.navigate(['dashboard/attendance']);
        const index = this.attendance.indexOf(this.attendance.find(data => data.id === body.id));
        this.attendance[index] = {
          ...attendance
        };
        this.attendance = [...this.attendance];
      } catch (e) {
        // is server sends back an error, we revert the changes
        console.error(e);
        this.removeAttendance(body.id, false);
      }

    }

  }

  async updateAttendance(body: ClassAttendance) {
    const attendance = this.attendance.find(data => data.id === body.id);
    if (attendance) {
      const index = this.attendance.indexOf(attendance);

      this.attendance[index] = {
        ...attendance,
        ...body
      };

      this.attendance = [...this.attendance];

      try {
        await this.attendanceService
          .updateAttendance(body.id, body)
          .toPromise();
        // this.router.navigate(['dashboard']);
      } catch (e) {

        console.log(e);
        this.attendance[index] = {
          ...attendance
        };

      }
      // end of catch
    }
  }

  async removeAttendance(id: any, serverRemove = true) {
    // optimistic update
    const attendance = this.attendance.find(data => data.id === id);
    this.attendance = this.attendance.filter(data => data.id !== id);

    if (serverRemove) {
      try {
        await this.attendanceService.removeAttendance(id).toPromise();
        // this.router.navigate(['dashboard']);
      } catch (e) {
        console.error(e);
        this.attendance = [...this.attendance, attendance];
      }
    }

  }

  async fetchAll() {
    this.attendance = await this.attendanceService.getAttendance().toPromise();
  }

  getAttendanceById(paramId): Observable<ClassAttendance[]> {
    if (paramId) {
      return this.attendance$.pipe(
        map(attendance => attendance.filter(item => item.sectionId === parseInt(paramId, 10)))
      );
    }
  }

}
