import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '@app/dashboard/shared/models';

@Pipe({
    name: 'filter',
    pure: false
})

export class GenderPipe implements PipeTransform {
    transform(students: Student[], term: string): any {
        return students.filter(student => student.gender === term);
    }
}
