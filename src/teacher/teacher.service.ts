import { Injectable } from '@nestjs/common';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { StudentService } from '../student/student.service';

@Injectable()
export class TeacherService {
  constructor(private studentService: StudentService) {}

  writeGradesToFile(): void {
    const students = this.studentService.getStudents();
    const grades = students.map(student => ({
      id: student.id,
      name: student.name,
      grades: student.notes,
      average: this.studentService.calculateAverage(student.notes)
    }));

    const filePath = join('src/grades.json');
    writeFileSync(filePath, JSON.stringify(grades, null, 2));
  }
}