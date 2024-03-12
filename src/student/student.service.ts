import { Injectable } from "@nestjs/common";
type Student = {
    id: number;
    name: string;
    notes : {
        math: number;
        english: number;
        french: number;
    };  
    age: number;
    };

@Injectable()
export class StudentService {
    private students: Student[] = [
        {
            id: 1,
            name: "John",
            notes: {
                math: 10,
                english: 15,
                french: 20
            },
            age: 20
        },
        {
            id: 2,
            name: "Jane",
            notes: {
                math: 12,
                english: 18,
                french: 16
            },
            age: 21
        },
        {
            id: 3,
            name: "Jack",
            notes: {
                math: 14,
                english: 10,
                french: 13
            },
            age: 22
        }
    ];

    getStudents(): Student[] {
        return this.students;
    }

    getStudent(id: number): Student {
        const student = this.students.find(student => student.id == id);
        console.log('Searched student id:', id);
        console.log('Found student:', student);
        return student;
    }

    calculateAverage( notes: {math: number, english: number, french: number}): number {
       
        return (notes.math + notes.english + notes.french) / 3;
    }
}
