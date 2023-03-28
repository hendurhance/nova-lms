import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './input/create-lesson.input';
import { AssignStudentsToLessonInput } from './input/assign-students-to-lesson.input';
import { Lesson } from './lesson.entity';
import { StudentService } from '../student/student.service';

@Resolver((of) => LessonType)
export class LessonResolver {
    constructor(
        private readonly lessonService: LessonService,
        private readonly studentService: StudentService,
    ) {}

    @Query((returns) => [LessonType])
    lessons() {
        return this.lessonService.getLessons();
    }

    @Query((returns) => LessonType)
    lesson(@Args('id') id: string) {
        return this.lessonService.getLesson(id);
    }

    @Mutation((returns) => LessonType)
    createLesson(
        @Args('createLessonInput') createLessonInput: CreateLessonInput,
    ) {
        return this.lessonService.createLesson(createLessonInput);
    }

    @Mutation((returns) => LessonType)
    assignStudentsToLesson(
        @Args('assignStudentsToLessonInput')
        assignStudentsToLessonInput: AssignStudentsToLessonInput,
    ) {
        return this.lessonService.assignStudentsToLesson(
            assignStudentsToLessonInput,
        );
    }

    @ResolveField()
    async students(@Parent() lesson: Lesson) {
        return this.studentService.getManyStudents(lesson.students);
    }
}
