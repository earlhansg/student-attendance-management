
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
