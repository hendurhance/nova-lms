import { Mutation, Resolver, Args, Query } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { CreateStudentInput } from './input/create-student.input';
import { StudentType } from './student.type';
import { UpdateStudentInput } from './input/update-student.input';

@Resolver((of) => StudentType)
export class StudentResolver {
    constructor(private readonly studentService: StudentService) {}

    @Query((returns) => [StudentType])
    async students() {
        return this.studentService.getStudents();
    }

    @Query((returns) => StudentType)
    async student(@Args('id') id: string) {
        return this.studentService.getStudent(id);
    }

    @Mutation((returns) => StudentType)
    async createStudent(
        @Args('createStudentInput') createStudentInput: CreateStudentInput,
    ) {
        return this.studentService.createStudent(createStudentInput);
    }

    @Mutation((returns) => StudentType)
    async updateStudent(
        @Args('updateStudentInput') updateStudentInput: UpdateStudentInput,
        @Args('id') id: string,
    ) {
        return this.studentService.updateStudent(updateStudentInput, id);
    }
}
