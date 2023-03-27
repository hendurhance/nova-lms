import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonRepository } from './lesson.repository';
import { CreateLessonInput } from './input/create-lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(LessonRepository)
        private lessonRepository: LessonRepository,
    ) {}

    /**
     * @description Get a lesson by id
     * @param id
     * @returns {Promise<Lesson>}
     */
    async getLesson(id: string): Promise<Lesson> {
        return this.lessonRepository.findOneBy({ id });
    }

    /**
     * @description Create a new lesson
     * @param createLessonInput
     * @returns {Promise<Lesson>}
     */
    async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
        return this.lessonRepository.createLesson(createLessonInput);
    }
}
