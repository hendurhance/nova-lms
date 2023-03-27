import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(private lessonService: LessonService) {}

    @Query((returns) => LessonType)
    lesson() {
        return {
            id: '123',
            name: 'Lesson 1',
            startDate: new Date().toISOString(),
            endDate: new Date().toISOString(),
            description: 'This is the first lesson',
            duration: 60,
        };
    }

    @Mutation(returns => LessonType)
    createLesson(@Args('createLessonDto') createLessonDto: CreateLessonDto) {
        return this.lessonService.createLesson(createLessonDto);
    }
}
