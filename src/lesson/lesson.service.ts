import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonRepository } from './lesson.repository';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(LessonRepository)
        private lessonRepository: LessonRepository,
    ) {}

    /**
     * @description Create a new lesson
     * @param createLessonDto
     * @returns {Promise<Lesson>}
     */
    async createLesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
        return this.lessonRepository.createLesson(createLessonDto);
    }
}
