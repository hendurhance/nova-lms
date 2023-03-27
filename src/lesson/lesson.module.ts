import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonsRepository } from './lessons.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Lesson])],
    providers: [LessonResolver, LessonService, LessonsRepository],
})
export class LessonModule {}
