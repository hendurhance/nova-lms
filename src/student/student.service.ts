import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentsRepository } from './students.repository';
import { CreateStudentInput } from './input/create-student.input';
import { Student } from './student.entity';
import { In } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(StudentsRepository)
        private studentsRepository: StudentsRepository,
    ) { }

    /**
     * @description Get a student by id
     * @returns {Promise<Student[]>}
     */
    async getStudents(): Promise<Student[]> {
        return this.studentsRepository.find();
    }

    /**
     * @description Get a student by id
     * @param string id
     * @returns {Promise<Student>}
     */
    async getStudent(id: string): Promise<Student> {
        return this.studentsRepository.findOneBy({ id });
    }

    /**
     * @description Create a new student
     * @param createStudentInput
     * @returns {Promise<Student>}
     */
    async createStudent(
        createStudentInput: CreateStudentInput,
    ): Promise<Student> {
        return this.studentsRepository.createStudent(createStudentInput);
    }

    async getManyStudents(studentIds: string[]): Promise<Student[]> {
        return this.studentsRepository.find({
            where: {
                id: {
                    $in: studentIds,
                } as any,
            },
        });
    }
}
