import { Student } from '@app/dashboard/shared/models';

export interface Attendance {
    id: number;
    date: string;
    status: boolean;
}

export interface StudentAttendance {
    id: number;
    idNumber: number;
    firstName: string;
    lastName: string;
    gender: string;
    section: number;
    attendance: Attendance[];
}

export interface Present {
    status: boolean;
}

export type StudentByAttendance = Student & Present;

export interface ClassAttendance {
    id: number;
    date: string;
    students: StudentByAttendance[];
}
