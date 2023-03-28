import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Student } from './student.entity';
import { CreateStudentInput } from './input/create-student.input';

@Injectable()
export class StudentsRepository extends Repository<Student> {
    constructor(dataSource: DataSource) {
        super(Student, dataSource.createEntityManager());
    }

    async createStudent(
        createStudentInput: CreateStudentInput,
    ): Promise<Student> {
        const { firstName, lastName, age, gender, email } = createStudentInput;
        const student = this.create({
            id: uuid(),
            firstName,
            lastName,
            age,
            gender,
            email,
        });
        return this.save(student);
    }
}
