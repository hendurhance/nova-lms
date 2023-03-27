import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
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
}
