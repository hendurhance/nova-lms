import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Student } from './student.entity';
import { CreateStudentInput } from './input/create-student.input';
import { UpdateStudentInput } from './input/update-student.input';

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

    async updateStudent(
        updateStudentInput: UpdateStudentInput,
        id: string,
    ): Promise<Student> {
        const { firstName, lastName, age, gender, email } = updateStudentInput;
        const student = await this.findOneBy({ id: id });
        student.firstName = firstName || student.firstName;
        student.lastName = lastName || student.lastName;
        student.age = age || student.age;
        student.gender = gender || student.gender;
        student.email = email || student.email;
        return this.save(student);
    }
}
