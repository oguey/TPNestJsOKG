import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentService } from './student/student.service';
import { TeacherService } from './teacher/teacher.service';
import  {noop} from 'rxjs';
 import { get } from 'http';
 import { NOMEM } from 'dns'; 


  @Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly studentService: StudentService ,
    private readonly teacherService: TeacherService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('students')
  getStudents(): ReturnType<StudentService['getStudents']> {
    return this.studentService.getStudents();
  }

  @Get('students/:id')
  getStudent(@Param('id') id: number) : ReturnType<StudentService['getStudent']>{
    const student = this.studentService.getStudent(id);
    console.log("etudian",student);
    return student;
  }
  @Get('students/:id/average') 
  getStudentAverage(@Param('id') id: number): number {
    const student = this.studentService.getStudent(id);
    const average = 0; // Declare and assign a value to the 'average' variable
    return average;
  }
  @Get('teacher/grades') 
  getGrades(): void {
    this.teacherService.writeGradesToFile();
  }
  
}
